import { useState } from 'react';

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTasks] = useState("");

  function addchange(event) {
    setNewTasks(event.target.value);
  }

  function addtask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTasks("");
    }
  }

  function deletetask(index) {
    const updatedtask = tasks.filter((_, i) => i !== index);
    setTasks(updatedtask);
  }

  function moveup(index) {
    if (index > 0) {
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
      setTasks(updatedtask);
    }
  }

  function movedown(index) {
    if (index < tasks.length - 1) {
      const updatedtask = [...tasks];
      [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
      setTasks(updatedtask);
    }
  }

  return (
    <div className="to-do-list">
      <h1>TO DO LIST</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newtask}
          onChange={addchange}
        />
        <button className="add-button" onClick={addtask}>
          Add Task
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deletetask(index)}>
              Delete
            </button>
            <button className="move-up" onClick={() => moveup(index)}>
              Move Up
            </button>
            <button className="move-down" onClick={() => movedown(index)}>
              Move Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Todo;
