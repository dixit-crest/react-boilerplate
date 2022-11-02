import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import { toast } from "react-toastify";

import { EMAIL_REGEX, api } from "../../utils";
const Signup = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => signup(data);

  const signup = async (payload) => {
    try {
      const response = await api.post("/auth/signup", {
        ...payload,
      });
      if (response.status === 201) {
        toast.success(response?.data?.message);
        return navigate("/signin");
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error?.response?.data?.message || error.message);
    } finally {
      setIsRequestLoading(false);
    }
  };
  return (
    // <Container>
    //   <Row>
    //     <Col
    //       xl={{ span: 6, offset: 3 }}
    //       md={{ span: 8, offset: 2 }}
    //       className="mt-5 pt-5"
    //     >
    //       <Form onSubmit={handleSubmit(onSubmit)}>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>First Name</Form.Label>
    //           <Form.Control
    //             {...register("firstName", { required: true })}
    //             type="firstName"
    //             placeholder="Enter First name"
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Last Name</Form.Label>
    //           <Form.Control
    //             {...register("lastName", { required: true })}
    //             type="lastName"
    //             placeholder="Enter Last name"
    //           />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             {...register("email", { required: true })}
    //             type="email"
    //             placeholder="Enter email"
    //           />
    //           <Form.Text className="text-muted">
    //             We'll never share your email with anyone else.
    //           </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             {...register("password", { required: true, min: 8 })}
    //             type="password"
    //             placeholder="Password"
    //           />
    //         </Form.Group>
    //         <Link to="/signin">
    //           <small className="text-muted form-text">Already have an account ? Signin</small>
    //         </Link>
    //         <div className="d-flex justify-content-end mt-4">
    //           <Button variant="primary" type="submit">
    //             Sign In
    //           </Button>
    //         </div>
    //       </Form>
    //     </Col>
    //   </Row>
    // </Container>
    <div className="container">
      <div className="row">
        <div className="mt-5 pt-5 col-xl-6 col-md-8 offset-xl-3 offset-md-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <Input
                type="text"
                props={register("firstName", {
                  required: "First name is required",
                })}
                label="First name"
                placeholder="Enter First name"
                error={errors?.firstName?.message}
              />
            </div>
            <div className="mb-3">
              <Input
                type="text"
                props={register("lastName", {
                  required: "Last name is required",
                })}
                label="Last name"
                placeholder="Enter Last name"
                error={errors?.lastName?.message}
              />
            </div>
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
                  required: "Password is required",
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
            <Link to="/signin">
              <small className="text-muted form-text">
                Already have an account ? Signin
              </small>
            </Link>
            <div className="d-flex justify-content-end mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={isRequestLoading}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
