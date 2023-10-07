import React from 'react';
import styles from './Header.module.css'
import { FaSun } from 'react-icons/fa'

export default function Header({ filters, filter, onFilterChange }) {
  return <header className={styles.header}>
    <span className={styles.icon}>
      <button className={styles.button}>
        <FaSun />
      </button>
    </span>
    <ul className={styles.filters}>
      {filters.map((value, index) => (
        <li key={index} >
          <button className={`${styles.filter} ${filter === value && styles.selected}`} onClick={() => onFilterChange(value)}>{value}</button>
        </li>
      ))}
    </ul>
  </header>
}

