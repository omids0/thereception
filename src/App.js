import React from 'react';
import {createStore, combineReducers} from 'redux'
import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import uuid from 'uuid'

// ADD_TURN
const addTurn = ({
    fileNum = '',
    fullName = '',
    phoneNum = 0,
    visitingTime = '',
    Dr = '',
    createdAt = 0,
    description = '',
} = {}) => ({
    type: 'ADD_TURN',
    turn: {
        id: uuid(),
        fileNum,
        fullName,
        phoneNum,
        visitingTime,
        Dr,
        createdAt,
        description,
    }
})

// REMOVE_TURN
const removeTurn = ({id} = {}) => ({
    type: 'REMOVE_TURN',
    id
})

// EDIT_TURN
const editTurn =(id, updates) => ({
    type: 'EDIT_TURN',
    id,
    updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SET_SORT_BY_CREATEDAT
const sortByCreatedAt = () => ({
    type: 'SORT_BY_CREATEDAT'
})

// SET_SORT_BY_VISITING_TIME

const sortByVisitingTime = () => ({
    type: 'SET_SORT_BY_VISITING_TIME'
})

// turn reducer

const turnReducerDefaultState = []

const turnReducer = (state = turnReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TURN':
            return [
                ...state,
                action.turn
            ]
        case 'REMOVE_TURN':
            return state.filter(({id}) => id !== action.id)
        case 'EDIT_TURN':
            return state.map((turn) => {
                if (turn.id === action.id) {
                    return {
                        ...turn,
                        ...action.updates
                    };
                    } else {
                        return turn
                }
            })
        default:
            return state
    }
}

// filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'createdAt', // visitingTime
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_CREATEDAT':
            return {
                ...state,
                sortBy: 'added'
            }
        case 'SET_SORT_BY_VISITING_TIME':
            return {
                ...state,
                sortBy: 'visitOn'
            }
        default:
            return state
    }
}

const getVisibleTurn = (turns, {text, sortBy}) => {
    return turns.filter((turn) => {
        const textMatch = turn.fullName.toLowerCase().includes(text.toLowerCase());
        const run = true

        return textMatch && run
    }).sort((a, b) => {
        if (sortBy === 'added') {
            return a.createdAt < b.createdAt ? 1:-1
        } else if (sortBy === 'visitOn') {
            return a.visitingTime < b.visitingTime ? 1:-1
        } 
    })
}

// store

const store = createStore(combineReducers({
    turns: turnReducer,
    filters: filterReducer
}))

store.subscribe(() => {
    const state = store.getState()
    const visibleTurns = getVisibleTurn(state.turns, state.filters)
    console.log(visibleTurns)
})

// const turnOne = store.dispatch(addTurn({fileNum: 1372, fullName: 'davood khatar', phoneNum: '0935123456', visitingTime: 140, createdAt: 110}))
// const turnTwo = store.dispatch(addTurn({fileNum: 1375, fullName: 'hasan torke', phoneNum: '0919123456', visitingTime: 150, createdAt:100}))

// store.dispatch(editTurn(turnOne.turn.id, {Dr:'tajik'}))

// store.dispatch(sortByCreatedAt())
// store.dispatch(sortByVisitingTime())
// store.dispatch(setTextFilter('kha'))

// const demoState = {
//     turns: [{
//         id: 'adq234dff',
//         fileNum: '1225',
//         fullName: 'Omid soheili',
//         phone: '0935123456',
//         Time: '98/02/13',
//         Dr: 'behrooz rahimi',
//         createdAt: '1235468988',
//         description: 'tozihat',
//         present: undefined
//     }],
//     filters: {
//         text: 'behrooz',
//         sortBy: 'createdAt',
//     }
// }

const MainDashboard = () => (
    <div>
        <h2>Dashboard</h2>
    </div>
)

const VirayeshNobatMain = () => (
    <div>
        <h2>VirayeshNobatMain</h2>
    </div>
)

const VirayeshNobat = () => (
    <div>
        <h2>VirayeshNobat</h2>
    </div>
)

const ContactUs = () => (
    <div>
        <h2>ContactUs</h2>
    </div>
)

const NewTurn = () => (
    <div>
        <h2>NewTurn</h2>
    </div>
)

const PageNotFound = () => (
    <div>
        <h2>Error 404: Page Not Found!</h2>
        <Link to='/'>Go Home</Link>
    </div>
)

const Header = () => (
    <div>
      <h1>The reception</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/new" activeClassName="is-active">Add New Turn</NavLink>
      <NavLink to="/contact-us" activeClassName="is-active">Contact Us</NavLink>
    </div>
  )
  
  const AppRoutes = () => (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={MainDashboard} exact={true} />
        <Route path="/new" component={NewTurn} />
        <Route path="/virayesh-nobat/" component={VirayeshNobatMain} exact={true} />
        <Route path="/virayesh-nobat/:id" component={VirayeshNobat} />
        <Route path="/contact-us" component={ContactUs} />
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  )

  export default AppRoutes