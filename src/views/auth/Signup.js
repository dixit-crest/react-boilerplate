import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginRequest } from "../../store/auth/actions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data) => dispatch(userLoginRequest(data, navigate));
  return (
    <Container>
      <Row>
        <Col
          xl={{ span: 6, offset: 3 }}
          md={{ span: 8, offset: 2 }}
          className="mt-5 pt-5"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                {...register("firstName", { required: true })}
                type="firstName"
                placeholder="Enter First name"
              />
            </Form.Group>
          
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                {...register("lastName", { required: true })}
                type="lastName"
                placeholder="Enter Last name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...register("email", { required: true })}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                {...register("password", { required: true, min: 8 })}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
