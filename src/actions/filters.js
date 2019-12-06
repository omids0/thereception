// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SET_SORT_BY_CREATEDAT
export const sortByCreatedAt = () => ({
    type: 'SORT_BY_CREATEDAT'
})

// SET_SORT_BY_VISITING_TIME

export const sortByVisitingTime = () => ({
    type: 'SET_SORT_BY_VISITING_TIME'
})