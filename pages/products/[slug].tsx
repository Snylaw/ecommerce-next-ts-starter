import { Layout } from "@components/common"
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next"

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { slug: "cool-hat"}},
            { params: { slug: "t-shirt"}},
            { params: { slug: "lightweight-jacket"}}
        ],
        fallback: false
    }
}

// provide product details in response to the slug
export const getStaticProps = async ({
    params}: GetStaticPropsContext<{slug: string}>) => {
    return {
        props: {
            product: {
                slug: params?.slug
            }
        }
    }
}

export default function ProductSlug({ product }: InferGetStaticPropsType<typeof getStaticProps>) {

    return (
        <div>
            {product.slug}
        </div>
    )
}

ProductSlug.Layout = Layout