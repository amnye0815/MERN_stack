import React from 'react';

const Display = (props) => {
    const { newTask, setNewTask } = props;

    const deleteHandler = (taskToDelete) => {
        console.log(taskToDelete);
        setNewTask(newTask.filter((task)=>{
            return task.content !== taskToDelete;
        }));
    }
    const checkHandler = (taskCompleted) => {
        console.log(taskCompleted);
        taskCompleted.isCompleted = !taskCompleted.isCompleted;
        const updatedToDos = [...newTask];
        setNewTask(updatedToDos);
        }
    // ADD STRIKETHROUGH CSS WITH CHECKED? TERNARY OPERATOR
    return (
        <div>
            <h3><u>To Do List</u></h3>
            <div>
                {
                newTask.map((task, index)=>(
                    <div key={index}>
                        {
                            task.isCompleted? 
                            <label style={{ textDecoration: "line-through" }}>{task.content}</label> :
                            <label>{task.content}</label>
                        }
                        <input type="checkbox" onClick={(e)=> checkHandler(task)} />
                        <button onClick={(e)=> deleteHandler(task.content)}>Delete</button>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Display;