import React, { useState } from 'react';

function App() {
  // State to store the to-do list and the current input value
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Function to add a new to-do item
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]); // Add the new item to the list
      setInput(''); // Clear the input field
    }
  };

  // Function to delete a to-do item
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a task"
          style={{ padding: '10px', width: '200px', marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              padding: '10px',
              margin: '5px',
              backgroundColor: '#f4f4f4',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '300px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {todo}
            <button onClick={() => deleteTodo(index)} style={{ padding: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
