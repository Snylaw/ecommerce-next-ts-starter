import useCart from "@common/cart/use-cart"

export default useCart

export const handler = {
    fetcherOptions: {
        query: ""
    },
    fetcher() {
        console.log("Not Called")
        return {
            data: "cart ready"
        }
    },
    useHook: ({useData}: any) => {
        const data = useData()
        return {
            data
        }
    }
}