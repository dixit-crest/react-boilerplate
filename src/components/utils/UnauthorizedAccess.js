import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./unauthorized.module.scss";

const UnauthorizedAccess = () => {
  return (
    <div className={classes.container}>
      <h2>You are not authorized to view this page.</h2>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
    // <Card className="text-center">
    //   <Card.Header>Unauthorized Access</Card.Header>
    //   <Card.Body>
    //     <Card.Title>You are not authorized to view this page.</Card.Title>
    //     <Button variant="primary">Go home</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default UnauthorizedAccess;
