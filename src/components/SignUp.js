import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { BElogo } from "../Assets/image";
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify CSS is imported
import { useDispatch, useSelector } from "react-redux";
import { signUpRequest } from "../redux/signUp/action";


const SignUp = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = async (data) => {
    const{email, password,name}= data;
    
    if(password && email && name){
      dispatch(signUpRequest(name,email,password,));
      Navigate('/login')

    }else{
      alert("Please provide your right details.")
    }
    
  }
  
 
  
  return (
  <>
   <ToastContainer />
      <div className="mx-auto p-5 w-100 ">
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
                <p className="fw-bolder fs-5 mb-0"> Sign Up </p>
              </div>
              <div>
              <Row className="px-4 paragraph">
                  <Form.Group as={Col} md="" controlId="validationCustom01">
                    <Form.Label className="mt-3 text-dark">Name</Form.Label>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "name is required" }}
                      render={({ field }) => (
                        <>
                          <Form.Control
                            {...field}
                            type="text"
                            placeholder="Enter your name"
                            isInvalid={!!errors.name}
                            className="custom-placeholder p-2 rounded-5"
                          />
                          {errors.name && (
                            <Form.Control.Feedback type="invalid">
                              {errors.name.message}
                            </Form.Control.Feedback>
                          )}
                        </>
                      )}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3 px-4 paragraph">
                  <Form.Group as={Col} md="" controlId="validationCustom01">
                    <Form.Label className="mt-3 text-dark">Email</Form.Label>
                    <Controller
                      name="email"
                      control={control}
                      rules={{ required: "Email is required" }}
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
                    </div>
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: "Password is required",
                      }}
                      render={({ field }) => (
                        <>
                          <Form.Control
                            {...field}
                            type={showPassword ? "text" : "password"}
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
                    SignUp
                  </Button>
                </div>
              </div>
            </Form>
           
          </div>
        </Container>
      </div>
  </>
  )
}

export default SignUp
