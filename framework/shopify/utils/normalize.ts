
import {
    ImageEdge,
    MoneyV2,
    Product as ShopifyProduct
} from "../schema"

import { Product } from "@common/types/product"

const normalizeProductImage = ({edges}: {edges: Array<ImageEdge>}) => 
    edges.map(({node: {originalSrc: url, ...rest}}) => ({
        url: `/images/${url}`,
        ...rest    
    }))

const normalizeProductPrice = ({currencyCode, amount}: MoneyV2) => ({
    value: +amount,
    currencyCode
})
    


export function normalizeProduct(productNode: ShopifyProduct): Product {
    const {
        id,
        title: name,
        handle,
        vendor, 
        description,
        images: imageConnection,
        priceRange,
        ...rest
    } = productNode

    const product = {
        id,
        name,
        vendor,
        description,
        path: `/${handle}`,
        slug: handle.replace(/^\/+|\/+$/g, ""),
        images: normalizeProductImage(imageConnection),
        price: normalizeProductPrice(priceRange.minVariantPrice),
        ...rest
    }

    return product
}