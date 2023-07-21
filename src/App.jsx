import './App.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import React, { useState } from 'react';

function App() {
  const [Todos, setTodos] = useState([])

  const handleClick = (value) => {
    setTodos([...Todos, value])
  }

  const handleDelete = (index) => {
    const removedArr = Todos;
    removedArr.splice(index, 1);
    setTodos([...removedArr])
  }

  return (
    <div className="container">
      <Header />
      <Main todos={Todos} handleDelete={handleDelete} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
