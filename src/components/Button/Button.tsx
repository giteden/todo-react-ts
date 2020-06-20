import React, {ButtonHTMLAttributes} from "react";
import styles from "./Button.module.scss";


const Button = ({ disabled, children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button disabled={disabled} className={styles.button} {...props} >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false
}

export default Button;
