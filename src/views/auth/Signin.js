import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLoginRequest } from "../../store/auth/actions";
import { EMAIL_REGEX } from "../../utils";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  console.log(errors);

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
              <Form.Label>Email address</Form.Label>
              <Form.Control
                {...register("email", {
                  required: "Email address is required",
                  pattern: {
                    value: EMAIL_REGEX,
                    message: "Please enter valid email address.",
                  },
                })}
                isInvalid={!!errors?.email}
                type="email"
                placeholder="Enter email"
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
              <Form.Control.Feedback type="invalid">
                {errors?.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                isInvalid={errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password should be atleast 8 characters long",
                  },
                })}
                type="password"
                placeholder="Password"
              />
              <Form.Control.Feedback type="invalid">
                {errors?.password?.message}
              </Form.Control.Feedback>
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

export default Signin;
