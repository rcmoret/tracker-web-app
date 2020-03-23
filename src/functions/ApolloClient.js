import { ApolloClient } from "apollo-boost"
import { HttpLink } from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"
import { API_URL } from "../constants/ApiConfig"

const endpoint = '/graphql'

const link = new HttpLink({
  uri: `${API_URL}${endpoint}`
})

export const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache()
})
