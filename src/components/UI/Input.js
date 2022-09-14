import classes from './Input.module.css';
import React from 'react';

//React.forwardRef is necessary to work with useRef() in a custom component
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
