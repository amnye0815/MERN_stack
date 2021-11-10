import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState({});
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => { 
            console.log(res.data);
            setProduct(res.data);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDesc(res.data.desc);
            })
            .catch((err) => console.log(err));
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const updatedProduct = { title, price, desc };
            axios.put(`http://localhost:8000/api/products/edit/${id}`, updatedProduct)
                .then((res) => {
                console.log(res.data);
                navigate(`/products/${id}`)
                })
                .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={submitHandler}>
            <h1>Edit Product:</h1>
            <div>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price: </label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Update;