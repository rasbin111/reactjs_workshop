import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

let token = localStorage.getItem("accessToken");
if (!token) { token = "" }
export const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/",
    cache: new InMemoryCache(),
    headers: {
      Authorization: `Bearer ${token}`
    }
  })


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
