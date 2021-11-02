import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
    const [ product, setProduct ] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000")
            .then(res=> setProduct(res.data.product))
    }, []);
    return(
        <div>
            <h1>Product Manager</h1>
        </div>
    )
}
export default Main;