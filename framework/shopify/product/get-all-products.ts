import getAllProductsQuery from "../utils/queries/get-all-products"
import { ProductConnection } from "../schema"

import fetchApi from "../utils/fetch-api"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery})

    // normalize and return new data

    return data.products
}

export default getAllProducts