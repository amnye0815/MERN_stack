import React from 'react';

const Display = (props) => {
    const { newTask } = props;

    return (
        <div>
            <h3><u>To Do List</u></h3>
            <div>
                {
                newTask.map((task, index)=>(
                        <label key={index}>{task.content}</label>
                    ))
                }
                <input type="checkbox" />
                <button>Delete</button>
            </div>
        </div>
    )
}

export default Display;