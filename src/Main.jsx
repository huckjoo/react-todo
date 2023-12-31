import React from 'react';
import styles from './Main.module.css';

export default function Main({ todos, handleDelete, types, handleUpdate }) {

  return (
    <div className={styles.main}>
      {types === 'active' && <ul>
        {todos.filter(todo => todo.checked === false).map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.value}</span>
            </li>
          )
        })}
      </ul>}

      {types === 'completed' && <ul>
        {todos.filter(todo => todo.checked === true).map((todo, i) => {
          return (
            <li key={i}>
              <span>{todo.value}</span>
            </li>
          )
        })}
      </ul>}


      {types === 'all' && todos.map((todo, i) => {
        return (
          <div className={styles.list} key={i}>
            <div>
              <input type="checkbox" onChange={(e) => { handleUpdate(i, e.target.checked) }} checked={todo.checked} />
              <span>{todo.value}</span>
            </div>
            <button className={styles.button} onClick={() => { handleDelete(i) }}>X</button>
          </div>
        )
      })}
    </div>
  );
}

