import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Vasundhara</h2>
          <p className="mt-2">Promoting environmental awareness and sustainability.</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/projects" className="hover:underline">Projects</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Get Involved</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="/donate" className="hover:underline">Donate</a></li>
              <li><a href="/volunteer" className="hover:underline">Volunteer</a></li>
              <li><a href="/events" className="hover:underline">Events</a></li>
              <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6 text-center text-sm text-gray-300">
        <p>&copy; {new Date().getFullYear()} Vasundhara. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
