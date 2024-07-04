import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center  p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/"  className='text-decoration-none text-white'>Home</Link></li>
              <li><Link to="/about"  className='text-decoration-none text-white'>About Us</Link></li>
              <li><Link to="/services"  className='text-decoration-none text-white'>Services</Link></li>
              <li><Link to="/contact"  className='text-decoration-none text-white'>Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Social Media</h5>
            <ul className="list-unstyled">
              <li><a href="https://facebook.com"  className='text-decoration-none text-white'><FaFacebook /> Facebook</a></li>
              <li><a href="https://twitter.com"  className='text-decoration-none text-white'><FaTwitter /> Twitter</a></li>
              <li><a href="https://instagram.com"  className='text-decoration-none text-white'><FaInstagram /> Instagram</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: vbhandari695@gmail.com</li>
              <li>Phone: +917455892904</li>
              <li>Address: Pauri garhwal, Pauri Garhwal,state: Uttarakhand</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
