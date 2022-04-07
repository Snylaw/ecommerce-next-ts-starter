import type { InferGetStaticPropsType } from "next"
import getAllProducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config";
import { Layout } from '@components/common'
import { ProductCard } from '@components/product'
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfig();
  const products = await getAllProducts(config);

  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}

export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {

  return (
    <>
      <Grid>
        { products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />  
        ))}
      </Grid>
      <Hero 
        headline="Welcome to our store!"
        description="We have a wide range of products to choose from." 
      />
      <Marquee>
        { products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id} 
            variant="slim"
            product={product} 
          />  
        ))}
      </Marquee>
      <Grid layout="B">
        { products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
          />  
        ))}
      </Grid>
      <Marquee variant="secondary">
        { products.slice(0, 3).map(product => (
          <ProductCard 
            key={product.id} 
            variant="slim"
            product={product} 
          />  
        ))}
      </Marquee>
    </>
  )
}

Home.Layout = Layout