import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'

import App from './components/App'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj6ypokvu0rve0190unqjctnr'
})

const client = new ApolloClient({
  networkInterface
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root')
)
registerServiceWorker()
