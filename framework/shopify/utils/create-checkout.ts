import { ApiFetcher } from "@common/types/api"
import { checkoutCreateMutation } from "./mutations"

const createCheckout = async (
    fetch: ApiFetcher
): Promise<any> => {
    const { data } = await fetch({
        query: checkoutCreateMutation
    })

    return data
}

export default createCheckout