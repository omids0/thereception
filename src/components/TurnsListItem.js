import React from 'react'
import {Link} from 'react-router-dom'


const TurnsListItem = ({fullName, visitingTime, phoneNum, id, dispatch}) => (
        <Link className='list-item' to={`/virayesh-nobat/${id}`}>
            <h3 className='list-item__title'>{fullName}</h3>
            <p>{visitingTime}</p>
        </Link>
)


export default TurnsListItem