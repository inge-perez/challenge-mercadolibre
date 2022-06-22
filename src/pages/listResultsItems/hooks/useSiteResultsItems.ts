import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { Item, SearchData, SearchResult } from '../types';
import texts from '../../../utils/text.json'

const useSiteResultsItems = () => {

    const [searchParam] = useSearchParams();
    const [data, setData] = useState<SearchData>();

    const getQueryParameter = (param: string) => {
        return searchParam.get(param);
    }

    const query = getQueryParameter('search') || '';

    const _doSearch = useCallback(async () => {
        const { data } = await axios.get<SearchResult>(
            `https://api.mercadolibre.com/sites/MLA/search?q=${query}`
        );
        const searchData: SearchData = {
            author: {
                name: texts.NAME,
                lastname: texts.LAST_NAME,
            },
            categories: [],
            items: data.results.slice(0, texts.QUANTITY_RESULTS).map<Item>((item) => ({
                id: item.id,
                title: item.title,
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                address: item.address.city_name,
                price: {
                    currency: item.prices.prices[0].currency_id,
                    amount: item.prices.prices[0].amount,
                    decimals: 0,
                },
            })),
        };
        return searchData;
    }, [query]);

    useEffect(() => {
        _doSearch().then((items) => setData(items));
    }, [_doSearch, searchParam]);

    return (
        {
            data
        }
    )
}

export default useSiteResultsItems


