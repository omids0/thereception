// turn reducer

const turnReducerDefaultState = [] // localStorage.getItem('theReception') ? JSON.parse(localStorage.getItem('theReception')) : []

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

export default turnReducer