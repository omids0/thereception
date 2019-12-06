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

export default getVisibleTurn