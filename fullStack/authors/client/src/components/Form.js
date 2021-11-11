import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Form = (props) => {
    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/authors`, {authorName})
            .then((res)=>{
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log(err);
                setErrors(err.response.data.errors);
            })
        }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <Link to={"/"}>Home</Link>
                <h4><u>Add a new author:</u></h4>
            </div>
            <label>Name: </label>
            <input type="text" value={authorName} onChange={(e)=> setAuthorName(e.target.value)} />
            { errors.authorName? <span>{errors.authorName.message}</span> :null }
            <div style={{marginTop:"20px"}}>
                <button onClick={(e) => navigate("/")}>Cancel</button>
                <button style={{marginLeft:"50px"}} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Form;