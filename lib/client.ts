import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc"

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
  })
})
