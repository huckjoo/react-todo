import React, { useState } from 'react';
import styles from './Footer.module.css'

export default function Footer({ handleClick }) {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <div className={styles.footer}>
      <form className={styles.form}>
        <input className={styles.input} placeholder='Add ToDo' onChange={handleChange} />
        <button type="button" className={styles.button} onClick={() => { handleClick(value) }}>Add</button>
      </form>
    </div>
  );
}

