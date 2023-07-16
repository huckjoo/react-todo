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

  return (
    <div className="container">
      <Header />
      <Main todos={Todos} />
      <Footer handleClick={handleClick} />
    </div>
  );
}

export default App;
