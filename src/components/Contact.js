import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Form submitted successfully!");
    reset();
  };

  return (
    <Container className="contact-us-container">
      <ToastContainer />
      <Row className="justify-content-center">
        <Col md={8}>
          <h1>Contact Us</h1>
          <Form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Enter your name"
                    isInvalid={!!errors.name}
                  />
                )}
              />
              {errors.name && <Form.Control.Feedback type="invalid">{errors.name.message}</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                    message: "Invalid email address"
                  }
                }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    isInvalid={!!errors.email}
                  />
                )}
              />
              {errors.email && <Form.Control.Feedback type="invalid">{errors.email.message}</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId="formAddress" className="mb-3">
              <Form.Label>Address</Form.Label>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{ required: "Address is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Enter your address"
                    isInvalid={!!errors.address}
                  />
                )}
              />
              {errors.address && <Form.Control.Feedback type="invalid">{errors.address.message}</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId="formContactNumber" className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Controller
                name="contactNumber"
                control={control}
                defaultValue=""
                rules={{
                  required: "Contact number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Contact number must be 10 digits"
                  }
                }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    type="text"
                    placeholder="Enter your contact number"
                    isInvalid={!!errors.contactNumber}
                  />
                )}
              />
              {errors.contactNumber && <Form.Control.Feedback type="invalid">{errors.contactNumber.message}</Form.Control.Feedback>}
            </Form.Group>

            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                rules={{ required: "Description is required" }}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    as="textarea"
                    rows={3}
                    placeholder="Enter your description"
                    isInvalid={!!errors.description}
                  />
                )}
              />
              {errors.description && <Form.Control.Feedback type="invalid">{errors.description.message}</Form.Control.Feedback>}
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
