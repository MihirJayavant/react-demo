import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.scss'
import App from './containers/app/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import { reducer, allSagas } from './store'
import createSagaMiddleware from 'redux-saga'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleWare = createSagaMiddleware()

export const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleWare)))
sagaMiddleWare.run(allSagas)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
