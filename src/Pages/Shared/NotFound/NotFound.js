import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'


const NotFound = () => {
    return (
        <div className='not-found'>
            <h1>404</h1>
            <p>Page not Found!</p>
            <Link className='text-decoration-none' to='/'>Back to Home</Link>
        </div>
    );
};

export default NotFound;