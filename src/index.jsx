import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import Form from './components/Form'

import './styles/main.scss'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root'),
)
