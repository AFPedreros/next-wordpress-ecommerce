"use client"

import axios from "axios"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

type Props = {}

export default function products({}: Props) {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data: products } = await axios.get(
        "http://localhost:3000/api/products"
      )
      products.map((product: any) => {
        console.log(product.name)
        console.log(product.permalink)
        console.log(product.price)
        console.log(product.description)
      })
    },
  })
  return <div>products</div>
}
