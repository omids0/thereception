import React from 'react';
import {connect} from 'react-redux'
import TurnForm from './TurnForm';
import {editTurn} from '../actions/turns'
import {removeTurn} from '../actions/turns'


const VirayeshNobat = (props) => {
    return (
        <div>
            <div className='page-header'>
                <div className='content-container'>
                <h2 className='page-header__title'>Edit Turn</h2>
                </div>
            </div>
            <div className='content-container'>
                <TurnForm 
                turn={props.turn}
                onSubmit={
                    (turn) => {
                        props.dispatch(editTurn(props.turn.id, turn))
                        props.history.push('/')
                    }
                } />
                <button 
                className='button button--secondery'
                onClick={
                    () => {
                        props.dispatch(removeTurn({id: props.turn.id}))
                        props.history.push('/')
                    }
                }>Remove</button>
            </div>
        </div>
    )
}

const mapStateProps = (state, props) => {
    return {
        turn: state.turns.find((turn) => turn.id === props.match.params.id)
    }
}

export default connect(mapStateProps)(VirayeshNobat)