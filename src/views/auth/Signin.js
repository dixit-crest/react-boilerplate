import React from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/common/Input";
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

  const onSubmit = (data) => dispatch(userLoginRequest(data, navigate));
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="mt-5 pt-5 col-xl-6 col-md-8 offset-xl-3 offset-md-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <Input
                  props={register("email", {
                    required: "Email address is required",
                    pattern: {
                      value: EMAIL_REGEX,
                      message: "Please enter valid email address.",
                    },
                  })}
                  label="Email address"
                  placeholder="Enter email"
                  error={errors?.email?.message}
                />
              </div>
              <div className="mb-3">
                <Input
                  type="password"
                  props={register("password", {
                    required: "Password address is required",
                    minLength: {
                      value: 8,
                      message: "Password should be atleast 8 characters long",
                    },
                  })}
                  label="Password"
                  placeholder="Enter password"
                  error={errors?.password?.message}
                />
              </div>
              <Link to="/signup">
                <small className="text-muted form-text">
                  Don't have an account ? Create one
                </small>
              </Link>{" "}
              <br />
              <Link to="/request-reset-password">
                <small className="text-muted form-text">
                  Forgot password ?
                </small>
              </Link>
              <div className="d-flex justify-content-end mt-4">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* // <Container> */}
      {/* <Row>
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
            <Link to="/request-reset-password">
              <Form.Text className="text-muted">Forgot password ?</Form.Text>
            </Link>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
            </div>
          </Form>
        </Col>
      </Row> */}

      {/* // </Container> */}
    </>
  );
};

export default Signin;
