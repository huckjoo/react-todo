import React from 'react';
import styles from './Main.module.css';

export default function Main({ todos, handleDelete, types, handleUpdate }) {

  return (
    <div className={styles.main}>
      <ul>
        {types === 'active' && todos.filter(todo => todo.checked === false).map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.value}</span>
            </li>
          )
        })}
      </ul>

      <ul>
        {types === 'completed' && todos.filter(todo => todo.checked === true).map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.value}</span>
            </li>
          )
        })}
      </ul>

      {types === 'all' && todos.map((todo, i) => {
        return (
          <div key={i}>
            <input type="checkbox" onClick={(e) => { handleUpdate(i, e.target.checked) }} />
            <span>{todo.value}</span>
            <button className={styles.button} onClick={() => { handleDelete(i) }}>X</button>
          </div>
        )
      })}
    </div>
  );
}

