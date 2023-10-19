import React from 'react';
import styles from './InputText.module.css';

const InputText = ({ placeHolder }) => (
    <input className={styles.input} type="text" placeholder={placeHolder} />
);

export default InputText;
