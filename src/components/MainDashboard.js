import React from 'react';
import {Link} from 'react-router-dom'
import TurnsList from './TurnsList'
import TurnsListFilter from './turnsListFilter'

const MainDashboard = () => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">Dashboard</h2>
                <div className='page-header__action'>
                    <Link className='button' to='/new'>Add New</Link>
                </div>
            </div>
        </div>
        <TurnsListFilter />
        <TurnsList />
    </div>
)

export default MainDashboard