import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    const {id} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res=> setProduct({
                ...res.data
            }))
    }, []);
    return(
        <div>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.desc}</p>
            <Link to = {`/products/edit/${product._id}`} style={{margin: "10px"}}>Edit</Link>
            <Link to = {`/`}>Home</Link>
        </div>
    )
}
export default Detail;