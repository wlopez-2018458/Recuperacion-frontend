import React from 'react';
import styles from './Button.module.css';

const Button = ({ Texto, onClick, Type }) => (
    <button className={styles.button} onClick={onClick} type={Type}>
        {Texto}
    </button>
);

export default Button;
