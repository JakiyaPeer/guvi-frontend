import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">© {new Date().getFullYear()} LMS Platform. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
        <div className="mt-4">
          <p>Follow us:</p>
          <div className="flex justify-center space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-500">Facebook</a>
            <a href="https://twitter.com" className="hover:text-blue-300">Twitter</a>
            <a href="https://linkedin.com" className="hover:text-blue-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
