import React from 'react';
import styles from './Main.module.css';

export default function Main({ todos, handleDelete }) {

  return (
    <div className={styles.main}>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}><span>{todo}</span> <button className={styles.button} onClick={() => { handleDelete(i) }}>X</button></li>
        })}
      </ul>
    </div>
  );
}

