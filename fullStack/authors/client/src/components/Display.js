import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

const Display = (props) => {
    const [authorList, setAuthorList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res=> {
                console.log(res);
                console.log(res.data);
                setAuthorList(res.data);
            })
            .catch((err)=> {
                console.log(err);
                navigate("/error");
            })
    }, [])

    const deleteHandler = (idBelow) => {
        axios.delete(`http://localhost:8000/api/authors/${idBelow}`)
            .then((res)=> {
                console.log(res.data);
                setAuthorList(authorList.filter((author)=> author._id !== idBelow))
            })
            .catch((err)=> {
                console.log(err);
            })
    }

    return (
        <div>
            <header>
                <Link to={"/new"}>Add an author</Link>
                <h5>We have quotes by:</h5>
                <table style={{margin:"auto", border:"1px solid black"}}>
                    <thead style={{backgroundColor:"gray", color:"white"}}>
                        <tr>
                            <th>Author: </th>
                            <th>Actions Available: </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            authorList?

                            authorList.map((author, index) => (
                                <tr key={index}>
                                    <td>{author.authorName}</td>
                                    <td>
                                        <button style={{margin:"10px"}} onClick={()=>{navigate(`/edit/${author._id}`)}}>Edit</button>
                                        <button style={{margin:"10px"}} onClick={()=> deleteHandler(author._id )}>Delete</button> 
                                    </td>
                                </tr>
                            ))
                            :null
                        }
                    </tbody>
                </table>
            </header>
        </div>
    )
}

export default Display;