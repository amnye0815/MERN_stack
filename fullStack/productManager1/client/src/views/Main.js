import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form';

const Main = () => {
    return(
        <div>
            <h1>Product Manager</h1>
            <Form />
        </div>
    )
}
export default Main;