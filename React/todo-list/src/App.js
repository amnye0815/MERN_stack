import React, { useState } from 'react';
import './App.css';

function App () {
  // Array of tasks - New being added, tasks being list.
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleNewTaskSubmit = (e) => {
    e.preventDefault();
    console.log(newTask)

    // Prevents you from entering an empty input form.
    if (newTask.length === 0) {
      return;
    }

    // this will allow us to tell if the task is complete or not - and adds option for strikethrough.
    const taskAtHand = {
      text: newTask,
      complete: false
    }
    
    // setTasks to include all tasks including the new tasks that is added via input form.
    setTasks([...tasks, taskAtHand]);
    // this clears the input box when you link it to value below in form.
    setNewTask("");
  }
// this is the function that will delete the tasks.
  const handleTaskDelete = (delIndex) => {
    console.log(delIndex);
// filters the tasks to see if the index is the one that is being chosen.
    const filteredTasks = tasks.filter((_newTask, index) => {
      return index !== delIndex;
    });
// updates task list to just the filtered tasks. 
    setTasks(filteredTasks);
  };

  const handleTaskComplete = (index) => {
    const updatedTasks = tasks.map((newTask, i) => {
      if (i === index) {
        newTask.complete = !newTask.complete;
      }

      return newTask;
    });
    setTasks(updatedTasks);
  }
  
  return (
    <div>
      <h1>Add Your Task:</h1>
      <form onSubmit={ handleNewTaskSubmit }>
        <input type="text" name="tasks" value={newTask} onChange={ (e) => setNewTask(e.target.value)} />
        <div>
        <button type="submit">Add</button>
        </div>
      </form>
      <hr />
      <h1>To Do List:</h1>
      {/* mapping tasks array here - do this with JSX - this shows all tasks in a list */}
      {
        tasks.map((newTask, index) => {
          const taskClasses = [];

          if (newTask.complete) {
            taskClasses.push("strikethrough");
          }

          return(
            <div>
              <span className={taskClasses.join(" ")}>{newTask.text}</span>
              <input type="checkbox"  checked= {newTask.complete} onChange={(e) => { handleTaskComplete(index); }} />
              <button type="submit" onClick={(e) => { handleTaskDelete(index); }}>Delete</button>
            </div>
          );
        })
      }
      </div>
  );
}

export default App;