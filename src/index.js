import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import AppRouter from './Routes/AppRouters'
import configureStore from '../src/store/configureStore'
import getVisibleTurn from './selectors/turns'
import {addTurn} from './actions/turns'
import './styles/styles.scss'
import 'normalize.css/normalize.css';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

const state = store.getState()

store.subscribe(() => {
    console.log(store.getState())
})

const visibleTurns = getVisibleTurn(state.turns, state.filters)
console.log(visibleTurns)

const JSX = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(JSX, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
