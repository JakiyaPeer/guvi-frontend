import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center h-screen bg-gray-400">
            <h1 className="text-4xl font-bold mb-4">Welcome to LMS</h1>
            <p className="text-lg mb-6">Connecting students with tutors for seamless online learning.</p>
            <div className="flex space-x-4"></div>
         <Link to="/Register">
         <button className="bg-blue-800 text-white py-2 px-4 rounded">Register</button>

         </Link> 
         <Link to="/Login">
         <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
         </Link>  
        </div>
    );
};

export default Home;