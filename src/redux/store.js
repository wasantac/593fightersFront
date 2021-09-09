import {createStore,combineReducers,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import sessionReducer from './sessionDuck';

const rootReducer = combineReducers({
    session : sessionReducer,
})
const composeEnhancers = compose;
export default function generateStore(){
    const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
    return store;
}