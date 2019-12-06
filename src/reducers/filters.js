// filter reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'added', // visitingTime
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

export default filterReducer