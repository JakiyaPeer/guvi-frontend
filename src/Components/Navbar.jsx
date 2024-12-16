import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="bg-gray-950 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold">
          LMS
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/tutors" className="hover:underline">
              Find Tutors
            </Link>
          </li>
          <li>
            <Link to="/lesson" className="hover:underline">
              Lessons
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/login"
            className="bg-blue-500 py-2 px-4 rounded hover:bg-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            Register
          </Link>
          <Link
            to="/lesson"
            className="ml-2 bg-green-500 py-2 px-4 rounded hover:bg-green-600"
          >
            lesson
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
