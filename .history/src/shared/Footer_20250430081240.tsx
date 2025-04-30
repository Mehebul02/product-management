import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Logo and Description */}
      <div className="text-center sm:text-left">
        <h3 className="text-2xl font-bold mb-4">Company Name</h3>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit elit sit amet urna aliquet.
        </p>
      </div>

      {/* Links */}
      <div className="text-center sm:text-left">
        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="text-center sm:text-left">
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex justify-center sm:justify-start gap-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 text-center text-gray-400 text-sm">
      <p>© 2025 Company Name. All Rights Reserved.</p>
    </div>
  </div>
</footer>

    );
};

export default Footer;