import { useState } from 'react';

function TodoList() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  
  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };


  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo }]);
      setNewTodo(''); 
    }
  };


  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

 
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
  };

  return (
    <div>
      <h1>Todo List</h1>
      
   
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add</button>
      </form>

     
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;