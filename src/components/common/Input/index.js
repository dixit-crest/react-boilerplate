import React from "react";
import classes from "./index.module.scss";

const Input = ({
  name,
  placeholder,
  label,
  value,
  error,
  className,
  props,
  ...rest
}) => {
  return (
    <div className={`${classes.input_wrapper}`}>
      {label && <label className={classes.label + " form-label"}>{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        value={value}
        {...props}
        {...rest}
        className={`${classes.input} form-control ${
          error && classes.error_border
        } ${className}`}
      />
      {error && <label className={`${classes.error} ${classes.label}`}>{error}</label>}
    </div>
  );
};

export default Input;
