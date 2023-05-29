import { NextResponse } from "next/server"
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"

interface Product {
  name: string
  permalink: string
  price: number
  description: string
}

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "",
  consumerKey: process.env.WC_CONSUMER_KEY || "",
  consumerSecret: process.env.WC_CONSUMER_SECRET || "",
  version: "wc/v3",
})

export async function GET(request: Request) {
  const { data: products } = await api.get("products")
  products.map((product: Product) => {
    console.log(product.name)
    console.log(product.permalink)
    console.log(product.price)
    console.log(product.description)
  })
  return NextResponse.json(products, {
    status: 200,
  })
}
