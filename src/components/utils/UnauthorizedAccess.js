import React from "react";
import { Button, Card } from "react-bootstrap";

const UnauthorizedAccess = () => {
  return (
    <Card className="text-center">
      <Card.Header>Unauthorized Access</Card.Header>
      <Card.Body>
        <Card.Title>You are not authorized to view this page.</Card.Title>
        <Button variant="primary">Go home</Button>
      </Card.Body>
    </Card>
  );
};

export default UnauthorizedAccess;
