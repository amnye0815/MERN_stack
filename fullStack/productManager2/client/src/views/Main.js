import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Display from '../components/Display';
import Form from '../components/Form';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=> {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [])

    return(
        <div>
            <h1>Product Manager</h1>
            <Form />
            <hr/>
            { loaded && <Display product={product}/> }
        </div>
    )
}
export default Main;