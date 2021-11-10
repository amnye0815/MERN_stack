import React, { useEffect, useState } from 'react';
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
                <button style={{margin: "10px"}}>Edit</button>
                <button>Delete</button>
        </div>
    )
}
export default Detail;