import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
})

const authLink = setContext(() => {
  const token = process.env.REACT_APP_TOKEN_AUTH
  return {
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
