import React, { useState } from 'react';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <nav className="bg-cyan-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/images/vasu_logo.svg" alt="Company Logo" className="h-10" />
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-300 hover:text-black">Home</a>
          <button onClick={handleLoginClick} className="text-gray-300 hover:text-black">Login</button>
          <button onClick={handleRegisterClick} className="text-gray-300 hover:text-black">Signup</button>
          <a href="/contact" className="text-gray-300 hover:text-black">Contact</a>
        </div>
      </div>
      <Modal show={showLoginModal} onClose={handleCloseLoginModal}>
        <Login onClose={handleCloseLoginModal} />
      </Modal>
      <Modal show={showRegisterModal} onClose={handleCloseRegisterModal}>
        <Register onClose={handleCloseRegisterModal} />
      </Modal>
    </nav>
  );
};

export default Navbar;
