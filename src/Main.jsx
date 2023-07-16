import React from 'react';
import styles from './Main.module.css';

export default function Main({ todos }) {

  return (
    <div className={styles.main}>
      <ul>
        {todos.map((todo, i) => {
          return <li key={i}>{todo}</li>
        })}
      </ul>
    </div>
  );
}

