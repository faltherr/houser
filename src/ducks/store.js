
import {createStore} from 'redux'
import reducer from './reducer'
// import promiseMiddleware from 'redux-promise-middleware'
// , applyMiddleware(promiseMiddleware())

export default createStore(reducer)