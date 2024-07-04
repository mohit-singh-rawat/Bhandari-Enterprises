import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../redux/login/actions';
import { BElogo } from '../Assets/image';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    dispatch(loginRequest(email, password));
    toast.success("Successfully logged in")
    reset();
  };

  if (users) {
    return <Navigate to="/home" replace />;
  }

  return (
    <>
      <div className="mx-auto p-5 w-100">
        <Container className="main-container">
          <div className="main-form mx-auto w-50">
            <Form
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              className="rounded border border-transparent shadow-lg"
            >
              <div className="header_main d-flex justify-content-center bg-warning rounded-top p-3">
                <img src={BElogo} alt="" className="w-50" />
              </div>
              <div className="text-center text-dark mt-5">
                <p className="fw-bolder fs-5 mb-0"> Sign In </p>
              </div>
              <div>
                <Row className="mb-3 px-4 paragraph">
                  <Form.Group as={Col} md="" controlId="validationCustom01">
                    <Form.Label className="mt-3 text-dark">Email</Form.Label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: 'Email is required' }}
                      render={({ field }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your email"
                            isInvalid={!!errors.email}
                            className="custom-placeholder p-2 rounded-5"
                          />
                          {errors.email && (
                            <Form.Control.Feedback type="invalid">
                              {errors.email.message}
                            </Form.Control.Feedback>
                          )}
                        </>
                      )}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-4 paragraph">
                  <Form.Group as={Col} md="" controlId="validationCustom04">
                    <div className="d-flex justify-content-between">
                      <Form.Label className="text-dark">Password</Form.Label>
                      <Link to="/forget" className="forget text-dark">
                        Forgot your Password?
                      </Link>
                    </div>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: 'Password is required',
                      }}
                      render={({ field }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="password"
                            className="custom-placeholder p-2 rounded-5"
                            placeholder="Enter your Password"
                            isInvalid={!!errors.password}
                          />
                          {errors.password && (
                            <Form.Control.Feedback type="invalid">
                              {errors.password.message}
                            </Form.Control.Feedback>
                          )}
                        </>
                      )}
                    />
                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-center">
                  <Button type="submit" className="mb-5 bg-warning px-4">
                    Log In
                  </Button>
                </div>
              </div>
            </Form>
            <div className="text-center mt-4">
              <p className="paragraph text-dark">
                Don't have an account?
                <span>
                  <Link to="/signUp" className="Sign_link ms-1 text-dark">
                    Sign Up
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Login;
