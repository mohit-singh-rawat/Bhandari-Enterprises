import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Button, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import { BElogo } from '../Assets/image';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/electronics/action';
import { AiFillDelete } from "react-icons/ai";
import { Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavbarMain = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCheckout = () => {
    setShow(false);
    navigate('/checkout'); // Navigate to checkout page
  };

  return (
    <>
      <Navbar expand="lg" className="nav_ka_bg p-3 rounded " style={{ fontFamily: "poppin", }}>
        <Container fluid>
          <Navbar.Brand href="/" className=''>
            <img
              src={BElogo}
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link href="/" className='text-white'>Home</Nav.Link>
              <Nav.Link href="/about" className='text-white'>About</Nav.Link>
              <NavDropdown title="Our Product" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/electronics" className='fw-bold'>Electronics Devices</NavDropdown.Item>
                <NavDropdown.Item href="/nepaltransfer" className='fw-bold'>Nepal Transfer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/bankingservices" className='fw-bold'>Banking Services</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" className='text-white'>Contact</Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Button variant="outline-light" onClick={handleShow}>
                Cart ({cartItems.length})
              </Button>
              <Nav.Link href="/login" className='text-white'>Logout</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} style={{ width: '900px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="card bg-white rounded-3 shadow text-center p-3 mb-3" style={{ height: 'auto', width: '200px' }}>
                <div className="card-body py-1">
                  <img src={item.image} alt="" style={{ height: '60px' }} />
                  <Tooltip title={item.title}>
                    <p className='fw-bolder' style={{ fontSize: "10px" }}>{item.title}</p>
                  </Tooltip>
                  <p className='fw-bold mb-1 text-info'>{(item.price * item.quantity).toFixed(2)}$</p>
                  <p className='mt-0'>{item.description.slice(0, 20)}</p>
                  <div className=''>
                    <Tooltip title='Decrease Quantity'>
                      <Button variant="outline-secondary" size="md" onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                    </Tooltip>
                    <span className='mx-2'>{item.quantity}</span>
                    <Tooltip title='Increase Quantity'>
                      <Button variant="outline-secondary" size="md" onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                    </Tooltip>
                  </div>
                  <div>
                    <AiFillDelete className='fs-3 mt-3' onClick={() => dispatch(removeFromCart(item.id))} style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="d-flex justify-content-center">
            <Button variant="btn btn-warning" className='text-white fw-bold' onClick={handleCheckout}>Checkout</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavbarMain;
