import React from 'react'
import { connect } from 'react-redux'
import TurnsListItem from './TurnsListItem'
import selectTurn from '../selectors/turns'

const TurnsList = (props) => (
    <div className="content-container">
        <div className='list-header'>
            <div className='show-for-mobile'>Turns</div>
            <div className='show-for-desktop'>Full Name</div>
            <div className='show-for-desktop'>Visiting On</div>
        </div>
        {props.turns.map((turn) => {
            return <TurnsListItem key={turn.id} {...turn} />
        })}
    </div>
)

const mapStateToProps = (state) => {
    return {
        turns: selectTurn(state.turns, state.filters)
    }
}

export default connect(mapStateToProps)(TurnsList)
