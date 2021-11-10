import React, { useState } from 'react';
import axios from 'axios';

const Form = (props) => {
    const {product, setProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {
            title: title,
            price: price,
            desc: desc
        })
            .then(res=> {
                console.log(res)
                setProduct([...product, res.data]);
            })
            .catch(err=> console.log(err))
            
        setTitle("");
        setPrice("");
        setDesc("");
    }

    return (
        <form onSubmit={ submitHandler }>
            <h1>Create A Product</h1>
            <div>
                <label>Title: </label>
                <input type="text" value={ title } onChange={(e)=> setTitle(e.target.value)} />
            </div>
            <div>
                <label>Price: </label>
                <input type="text" value={ price } onChange={(e)=> setPrice(e.target.value)} />
            </div>
            <div>
                <label>Description: </label>
                <input type="text" value={ desc } onChange={(e)=> setDesc(e.target.value)} />
            </div>
            <input type="submit" />
        </form>
    )
}

export default Form;