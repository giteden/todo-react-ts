import React, {InputHTMLAttributes} from 'react';
import styles from './TextInput.module.scss';


const TextInput = (props : InputHTMLAttributes<HTMLInputElement>) => {
    return <input {...props} className={styles.input}></input>
}

export default TextInput;