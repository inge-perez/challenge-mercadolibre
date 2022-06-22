import { Detail } from "../domain/Detail"

export class HttpDetailItemService {

    async getItemDetail(itemId: string) {

        const url = `https://api.mercadolibre.com/items/${itemId}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        )

        const body = await response.json();
        return Detail.create(body);
    }

}