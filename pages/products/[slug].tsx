import { Layout } from "@components/common"
import { Container } from "@components/ui"
import { getConfig } from "@framework/api/config"
import { 
    getAllProductsPaths, 
    getProduct 
} from "@framework/product"
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from "next"

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
    const config = getConfig()
    const { products } = await getAllProductsPaths(config)

    return {
        paths: products.map(p => ({ params: { slug: p.slug } })),
        fallback: false
    }
}

// provide product details in response to the slug
export const getStaticProps = async ({
    params}: GetStaticPropsContext<{slug: string}>
) => {
    const config = getConfig()
    const { product } = await getProduct({
        config,
        variables: { slug: params?.slug }})

    return {
        props: {
            product
        }
    }
}

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Container>
            <p>id: {product?.id}</p>
            <p>name: {product?.name}</p>
            <p>price value: {product?.price.value}</p>
            <p>price currency: {product?.price.currencyCode}</p>
            <p>description: {product?.description}</p>

            <h1 className="mb-4">OPTIONS</h1>
            <div>
                { product?.options.map(option => 
                    <div>
                        <p>Name: {option.displayName}</p>
                        { option.values.map(value =>
                            <div>
                                <p>Label: {value.label}</p>
                                <p>Hex Color: {value.hexColor}</p>
                            </div>
                        )}
                    </div>     
                )}
            </div>
            <h1 className="mb-4">VARIANTS</h1>
            { product?.variants.map(variant =>
                <div>
                    <p>Variant Name: {variant.name}</p>
                    { variant.options.map(option =>
                        <div>
                            <p>Name: {option.displayName}</p>
                            { option.values.map(value =>
                                <div>
                                    <p>Label: {value.label}</p>
                                    <p>Hex Color: {value.hexColor}</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </Container>
    )
}

ProductSlug.Layout = Layout