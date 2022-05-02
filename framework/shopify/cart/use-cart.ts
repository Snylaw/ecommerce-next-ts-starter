import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
    fetchOptions: {
        // Get checkout query
        query: "query { hello }"
    },
    async fetcher({
        fetch, 
        options, 
        input: { checkoutId }
    }: any) {
        const data = await fetch({...options})
        // We need checkout ID
        console.log(checkoutId)

        // Get checkout

        // If there is no checkout, create one
        return { data }
    },
    useHook: ({useData}: any) => {
        const data = useData()
        return {
            data
        }
    }
}