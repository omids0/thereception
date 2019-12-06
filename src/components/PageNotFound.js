import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
    <div>
        <h2>Error 404: Page Not Found!</h2>
        <Link to='/'>Go Home</Link>
    </div>
)

export default PageNotFound