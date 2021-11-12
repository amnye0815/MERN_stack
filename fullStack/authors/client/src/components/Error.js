import React from 'react';
import { Link } from '@reach/router';

const Error = (props) => {

    return (
        <div>
            <p>We are sorry. There was an error in your request. Would you like to add a new author to the database?</p>
            <Link to={"/new"}>Create an Author</Link>
        </div>
    )
}

export default Error;