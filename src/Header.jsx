import React from 'react';
import { FaSun } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header({ handleFilter }) {

  return (
    <header className={styles.header}>
      <div className={styles.mode}>
        <FaSun />
      </div>
      <div>
        <button className={styles.button} onClick={() => { handleFilter('all') }}><span>All</span></button>
        <button className={styles.button} onClick={() => { handleFilter('active') }}>Active</button>
        <button className={styles.button} onClick={() => { handleFilter('completed') }}>Completed</button>
      </div>
    </header>
  );
}

