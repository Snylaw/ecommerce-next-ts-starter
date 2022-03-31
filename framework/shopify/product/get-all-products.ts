import getAllProductsQuery from "../utils/queries/get-all-products"
import { ProductConnection } from "../schema"
import { normalizeProduct } from "../utils/normalize"
import fetchApi from "../utils/fetch-api"

type ReturnType = {
    products: ProductConnection
}

const getAllProducts = async (): Promise<any> => {
    const { data } = await fetchApi<ReturnType>({query: getAllProductsQuery})

    const products = data.products.edges.map(({ node: product }) => 
        normalizeProduct(product)
    ) ?? []

    return products
}

export default getAllProducts