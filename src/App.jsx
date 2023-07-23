import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  const [types, setTypes] = useState('all')

  const handleClick = (todo) => {
    const arr = todos;
    arr.push(todo);
    setTodos([...arr])
  }

  const handleDelete = (index) => {
    const removedArr = todos;
    removedArr.splice(index, 1);
    setTodos([...removedArr])
  }

  const handleCheckUpdate = (index, bool) => {
    const updatedArr = todos;
    updatedArr[index].checked = bool;
    setTodos([...updatedArr])
  }

  const handleFilter = (type) => {
    if (type === 'all') {
      setTypes('all')
    }
    if (type === 'active') {
      setTypes('active')
    }
    if (type === 'completed') {
      setTypes('completed')
    }
  }

  return (
    <div className="container">
      <Header handleFilter={handleFilter} />
      <Main todos={todos} handleDelete={handleDelete} types={types} handleUpdate={handleCheckUpdate} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
