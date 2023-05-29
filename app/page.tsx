"use client"

import Link from "next/link"
import { QueryClient, QueryClientProvider, useQuery } from "react-query"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Products from "@/components/products"

export default function IndexPage() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Hello
          </h1>
        </div>
        <Products />
      </section>
    </QueryClientProvider>
  )
}
