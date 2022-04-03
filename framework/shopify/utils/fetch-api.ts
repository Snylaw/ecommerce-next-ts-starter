import { 
    ApiFetcherOptions, 
    ApiFetcherResults 
} from "@common/types/api"


const fetchApi = async <T> ({
    url,
    query }: ApiFetcherOptions
): Promise<ApiFetcherResults<T>> => {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            query // getAllProductsQuery
        })
    })

    const { data, errors } = await res.json()
    // ?? is checking if first left hand expression is null or undefined -> if it is then return second expression
    // || is checking if first left hand expression is not null or undefined -> if it is then return first expression
    if (errors) {
        throw new Error(errors[0].message ?? errors.message)
    }
    
    return { data }
}

export default fetchApi