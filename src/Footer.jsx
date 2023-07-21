import React, { useState } from 'react';
import styles from './Footer.module.css'

export default function Footer({ handleClick }) {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const handleButtonClick = () => {
    handleClick(value)
    setValue("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) return
    handleClick(value)
    setValue("")
  }

  return (
    <div className={styles.footer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input className={styles.input} placeholder='Add ToDo' onChange={handleChange} value={value} />
        <button type="button" className={styles.button} onClick={handleButtonClick}>Add</button>
      </form>
    </div>
  );
}

