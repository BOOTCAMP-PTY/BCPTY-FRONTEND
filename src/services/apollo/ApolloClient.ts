import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'

import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
})

const authLink = setContext((_, { headers }) => {
  const cookie = Cookies.get('accessToken')
  const token = cookie ? cookie : process.env.REACT_APP_TOKEN_AUTH
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
