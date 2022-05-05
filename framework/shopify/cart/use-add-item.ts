import { useAddItem } from "@common/cart";
import { Cart } from "@common/types/cart";
import { MutationHook } from "@common/types/hooks";
import { getCheckoutId } from "@framework/utils";
import { checkoutLineItemsAddMutation } from "@framework/utils/mutations";

export default useAddItem;

export type AddItemHookDescriptor = {
    fetcherInput: {
        variantId: string;
        quantity: number;
    },
    data: Cart
}

export const handler: MutationHook<AddItemHookDescriptor> = {
    fetcherOptions: {
        query: checkoutLineItemsAddMutation
    },
    fetcher: async ({fetch, options, input}) => {
        
        const variables = {
            checkoutId: getCheckoutId(),
            lineItems: [
                {
                    variantId: input.variantId,
                    quantity: 1
                }
            ]
        }
        
        const { data } = await fetch({
            ...options,
            variables
        });

        return data;
    },
    useHook: ({fetch}) => {
        return async (input) => {
            const res = await fetch(input);
            return res
        }
    }
}