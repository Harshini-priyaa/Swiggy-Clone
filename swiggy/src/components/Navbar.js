// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './Navbar.css';

Modal.setAppElement('#root');

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const openModal = (signUp = false) => {
    setIsSignUp(signUp);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/foods">Foods</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/cart">Cart</Link>
      <button onClick={() => openModal(false)}>Sign In</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Authentication Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {isSignUp ? (
          <SignUpForm closeModal={closeModal} openModal={openModal} />
        ) : (
          <SignInForm closeModal={closeModal} openModal={openModal} />
        )}
      </Modal>
    </div>
  );
};

export default Navbar;
