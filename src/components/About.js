import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <Container className="about-us-container">
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h1>About Us</h1>
          <p className="lead">
            Welcome to our company. We are committed to delivering the best products and services to our customers.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to create innovative solutions that make life easier and better for everyone.
          </p>
        </Col>
        <Col md={6}>
          <h2>Our Vision</h2>
          <p>
            We envision a world where technology bridges gaps and brings people closer together.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={12}>
          <h2>Our Team</h2>
          <p>
            Our team is composed of dedicated professionals who are passionate about their work and committed to excellence.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
