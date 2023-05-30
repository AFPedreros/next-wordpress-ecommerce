import Link from "next/link"
import { gql } from "@apollo/client"

import { getClient } from "@/lib/apollo"
import Products from "@/components/products"

const query = gql`
  query NewQuery {
    products {
      nodes {
        id
        description
        image {
          uri
          title
          sourceUrl
        }
        type
        name
        ... on SimpleProduct {
          price
          id
        }
        ... on VariableProduct {
          price
          id
        }
        ... on ExternalProduct {
          price
          id
        }
        ... on GroupProduct {
          products {
            nodes {
              ... on SimpleProduct {
                name
                price
                id
              }
            }
          }
        }
      }
    }
  }
`

export default async function IndexPage() {
  const { data } = await getClient().query({ query })

  console.log(data.products.nodes)

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Headless WordPress E-commerce
        </h1>
      </div>
    </section>
  )
}
