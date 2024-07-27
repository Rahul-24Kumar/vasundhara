import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

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

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/"> <img src="/images/logo.svg" alt="Company Logo" className="h-10" /> </Link>
        
        <div className="hidden md:flex items-center space-x-4">
          {/* <Link to="/" className="text-gray-300 hover:text-white">Home</Link> */}
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link>
          {user ? (
            <div className="relative group">
              <button className="text-gray-300 hover:text-white flex items-center space-x-2">
                <span>{user.user.name || user.user.email}</span>
                <img src="/images/user-icon.png" alt="User Icon" className="w-6 h-6 rounded-full" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block">
                <div className="px-4 py-2 text-sm text-gray-700">
                  <p>{user.user.name}</p>
                  <p>{user.user.email}</p>
                </div>
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <button onClick={handleLoginClick} className="text-gray-300 hover:text-white">Login</button>
              <button onClick={handleRegisterClick} className="text-gray-300 hover:text-white">Signup</button>
            </>
          )}
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
