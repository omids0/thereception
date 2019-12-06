import uuid from 'uuid'
import moment from 'moment'

// ADD_TURN
export const addTurn = ({
    fileNum = '',
    fullName = '',
    phoneNum = 0,
    visitingTime = '',
    Dr = '',
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
        createdAt: moment().format(),
        description,
    }
})

// REMOVE_TURN
export const removeTurn = ({id} = {}) => ({
    type: 'REMOVE_TURN',
    id
})

// EDIT_TURN
export const editTurn =(id, updates) => ({
    type: 'EDIT_TURN',
    id,
    updates
})