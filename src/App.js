import './App.css';
import FilterButton from './components/FilterButton';
import Form from './components/Form';
import Todo from "./components/Todo";
import  { useState } from "react";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  
  function addTask(name) {
    const newTask = {  id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
    console.log(newTask)
    
  }

  function deleteTask(id) {
      const remainingTasks = tasks.filter((task) => id !== task.id);
      setTasks(remainingTasks);
    }
      
    function editTask(id, newName) {
      const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
        if (id === task.id) {
          return {...task, name: newName}
        }
        return task;
      });
      setTasks(editedTaskList);
    }

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {/* <FilterButton /> */}
        {/* <FilterButton />
        <FilterButton /> */}
      </div>

      <h2 id="list-heading">Remaining tasks:</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
          {taskList}

      </ul>
    </div>
  );
}


export default App;
