import useCart from "@common/cart/use-cart"
import { Cart } from "@common/types/cart";
import { 
    checkoutToCart, 
    createCheckout, 
    getCheckoutQuery 
} from "@framework/utils";
import { useMemo } from "react";
import { SWRHook } from "@common/types/hooks";

export type UseCartHookDescriptor = {
    fetcherInput: {
        checkoutId: string;
    },
    fetcherOutput: any,
    data: Cart
}

export default useCart

export const handler: SWRHook<UseCartHookDescriptor> = {
    fetcherOptions: {
        // Get checkout query
        query: getCheckoutQuery
    },
    async fetcher({
        fetch,
        options,
        input: { checkoutId }
    }) {
        let checkout;
        
        if (checkoutId) {
            const { data } = await fetch({
                ...options,
                variables: {
                    checkoutId
                }
            });

            checkout = data.node
        } else {
            checkout = await createCheckout(fetch)
        }

        const cart = checkoutToCart(checkout)
        
        return cart
    },
    useHook: ({useData}) => {
        const data = useData({
            swrOptions: {
                revalidateOnFocus: false
            }
        })

        return useMemo(() => {
            return data
        }, [data])
    }
}