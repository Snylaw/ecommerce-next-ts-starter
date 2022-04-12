import { ApiConfig } from "@common/types/api";


const getProduct = async (config: ApiConfig): Promise<any> => {

    return {
        product: {
            name: "My product",
            slug: "my-product",
        }
    }
}

export default getProduct;