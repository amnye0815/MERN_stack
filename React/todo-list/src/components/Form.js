import React from 'react';
import { useState } from 'react/cjs/react.development';

const Form = (props) => {
    const {newTask, setNewTask} = props;
    const [content, setContent] = useState("");

    const submitHandler = (e) =>{
    e.preventDefault();

    setNewTask([...newTask, {content: content,
    isCompleted: false,
    }]);
    setContent("");

    }

    return(
        <form onSubmit={submitHandler}>
            <h3><u>Add a Task</u></h3>
            <input type="text" value={ content } onChange={(e)=> setContent(e.target.value)} />
            <input type="submit" value="Add" />
        </form>
    )
}

export default Form;