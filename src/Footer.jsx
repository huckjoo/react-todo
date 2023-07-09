import React from 'react';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Add ToDo' />
        <button type="button" className={styles.button}>Add</button>
      </form>
    </div>
  );
}

