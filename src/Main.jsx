import React from 'react';
import styles from './Main.module.css';

export default function Main({ todos, handleDelete }) {

  return (
    <div className={styles.main}>
      {todos.map((todo, i) => {
        return (
          <div>
            <input type="checkbox" />
            <span>{todo}</span>
            <button className={styles.button} onClick={() => { handleDelete(i) }}>X</button>
          </div>
        )
      })}
    </div>
  );
}

