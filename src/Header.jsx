import React from 'react';
import { FaSun } from 'react-icons/fa'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <FaSun />
      <div>
        <button className={styles.button}>All</button>
        <button className={styles.button}>Active</button>
        <button className={styles.button}>Completed</button>
      </div>
    </header>
  );
}

