import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { ItemDetailResult, DescriptionResult, ItemDetailData } from "../types";
import texts from "../../../utils/text.json";

const useItemDetail = () => {
    const { itemId = "" } = useParams();

    const [searchParam] = useSearchParams();
    const [dataItem, setDataItem] = useState<ItemDetailData>();

    const _doSearch = useCallback(async () => {
        const [detail, description] = await _getData();

        const searchData: ItemDetailData = {
            author: {
                name: texts.NAME,
                lastname: texts.LAST_NAME,
            },
            item: {
                id: detail.id,
                title: detail.title,
                picture: detail.pictures[0].url,
                condition: detail.condition == "new" ? "nuevo" : "usado",
                free_shipping: detail.shipping.free_shipping,
                sold_quantity: detail.sold_quantity,
                description: description.plain_text,
            },
            price: {
                currency: detail.currency_id,
                amount: detail.price,
                decimals: 2,
            },
            categories: [detail.category_id],
        };
        return searchData;
    }, [itemId]);

    useEffect(() => {
        _doSearch().then((items) => setDataItem(items));
    }, [_doSearch, searchParam]);

    return {
        dataItem,
    };

    function _getData(): Promise<[ItemDetailResult, DescriptionResult]> {
        const itemDetailPromise = axios
            .get<ItemDetailResult>(`https://api.mercadolibre.com/items/${itemId}`)
            .then(({ data }) => data);

        const descriptionPromise = axios
            .get<DescriptionResult>(
                `https://api.mercadolibre.com/items/${itemId}/description`
            )
            .then(({ data }) => data);

        return Promise.all([itemDetailPromise, descriptionPromise]);
    }
};

export default useItemDetail;