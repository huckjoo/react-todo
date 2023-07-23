import React from 'react';
import { FaSun } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header({ handleFilter }) {

  return (
    <header className={styles.header}>
      <FaSun />
      <div>
        <button className={styles.button} onClick={() => { handleFilter('all') }}>All</button>
        <button className={styles.button} onClick={() => { handleFilter('active') }}>Active</button>
        <button className={styles.button} onClick={() => { handleFilter('completed') }}>Completed</button>
      </div>
    </header>
  );
}

