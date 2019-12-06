import React from 'react'
import { connect } from 'react-redux'
import {setTextFilter, sortByCreatedAt, sortByVisitingTime} from '../actions/filters'

const TurnsListFilter = (props) => (
    <div className='content-container'>
        <div className='input-group'>
            <div className='input-group__item'>
                <input type='text' className='text-input' value={props.filters.text} placeholder='Search Name' onChange={(e) => {
                    props.dispatch(setTextFilter(e.target.value))
                }} />
            </div>
            <div className='input-group__item'>
                <select className='select' value={props.filters.sortBy} onChange={(e) => {
                    if(e.target.value === 'added') {
                        props.dispatch(sortByCreatedAt())
                    } else if (e.target.value === 'visitOn') {
                        props.dispatch(sortByVisitingTime())
                    }
                }}>
                    <option value="added">Add to list</option>
                    <option value="visitOn">Visiting Time</option>
                </select>
            </div>
        </div>
    </div>
)

const mapStateProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateProps)(TurnsListFilter)