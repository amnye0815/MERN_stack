import React from 'react';

const Display = (props) => {
    const { newTask } = props;

    // ADD DELETE FUNCTION OF ONCLICK HANDLER
    // ADD STRIKETHROUGH CSS WITH CHECKED? TERNARY OPERATOR
    return (
        <div>
            <h3><u>To Do List</u></h3>
            <div>
                {
                newTask.map((task, index)=>(
                    <div key={index}>
                        <label>{task.content}</label>
                        <input type="checkbox" />
                        <button>Delete</button>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Display;