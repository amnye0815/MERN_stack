import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Update = (props) => {
    const [errors, setErrors] = useState("");
    const [authorName, setAuthorName] = useState("");
    const {id} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(res=> {
            console.log(res);
            console.log(res.data);
            setAuthorName(res.data.authorName);
        })
        .catch((err)=> {
            console.log(err);
            navigate('/error');
        })
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${id}`, {authorName})
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
        <form onSubmit={editHandler}>
            <div>
                <Link to={"/"}>Home</Link>
                <h4><u>Edit this author:</u></h4>
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

export default Update;