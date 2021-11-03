import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Main = () => {
    const [ message, setMessage ] = useState("Loading...");
    useEffect(()=> {
        axios.get("http://localhost:8000/api")
            .then(res=> setMessage(res.data.product))
    }, []);
    return(
        <div>
            <h1>Product Manager</h1>
            <h3>Message from backend: { message }</h3>
        </div>
    )
}
export default Main;