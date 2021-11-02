import React, { useState, useEffect } from 'react';

const Form = (props) => {
    const {newProduct, setNewProduct} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        setNewProduct([...newProduct, {title: title, price: price, desc: desc}]);
        setTitle("");
        setPrice("");
        setDesc("");
    }

    return (
        <form onSubmit={ submitHandler }>
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
            <button>Create</button>
        </form>
    )
}

export default Form;