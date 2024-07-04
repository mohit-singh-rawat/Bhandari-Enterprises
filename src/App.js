import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NavbarMain from './components/Navbar';
import Electronics from './components/Electronics';
import Footer from './components/Footer';
import Checkout from './components/Checkout';
import NepalTransfer from './components/NepalTransfer';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forget from './components/Forget';
const App = () => {
  return (
    <>
      <Router>
        <NavbarMain/>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp/>} />
          <Route exact path="/forget" element={<Forget/>} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path = "/bankingservices" element={<h1>Banking Services</h1>} /> 
          <Route exact path ="/nepaltransfer" element={<NepalTransfer />} />
          <Route exact path = "/electronics" element={<Electronics />} />
          <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
      </Router>
    </>
  )
}

export default App
