import {createStore, combineReducers} from 'redux'
import turnReducer from '../reducers/turns'
import filterReducer from '../reducers/filters'

// store

export default () => {
    const store = createStore(combineReducers({
        turns: turnReducer,
        filters: filterReducer
    }))

    return store
}

