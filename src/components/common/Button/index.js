import React from "react";
import classes from "./index.module.scss";

const Button = ({ className, children, ...rest }) => {
  return <button className={`${className} ${classes.button} btn btn-primary`}  {...rest}>{children}</button>;
};

export default Button;
