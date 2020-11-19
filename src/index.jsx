import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer'
import Form from './components/Form'
import { INITIAL_STATE } from './data/constants'

import './styles/main.scss'

const store = createStore(reducer, INITIAL_STATE)

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root'),
)
