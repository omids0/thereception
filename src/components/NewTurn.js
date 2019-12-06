import React from 'react';
import {connect} from 'react-redux'
import TurnForm from './TurnForm'
import {addTurn} from '../actions/turns'

const NewTurn = (props) => (
    <div>
        <div className='page-header'>
            <div className='content-container'>
                <h2 className='page-header__title'>New Turn</h2>
            </div>
        </div>
        <div className='content-container'>
            <TurnForm onSubmit={
                (turn) => {
                    props.dispatch(addTurn(turn))
                    props.history.push('/')
                }
            }/>
        </div>
    </div>
)

export default connect()(NewTurn)