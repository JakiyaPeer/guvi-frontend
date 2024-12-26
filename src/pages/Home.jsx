import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div 
            className="flex flex-col items-center h-screen bg-cover bg-center" 
            style={{ backgroundImage: "url('https://www.olivevle.com/wp-content/uploads/2023/07/Learning-Content-Management-System-Software-for-Enterprise-Companies--scaled.webp')" }}
        >
            <h1 className="text-4xl font-bold mb-4 text-black">Welcome to LMS</h1>

            <p className="text-lg mb-6 text-black">Connecting students with tutors for seamless online learning.</p>
            
            <div className="flex space-x-4">
                <Link to="/Register">
                    <button className="bg-blue-800 text-white py-2 px-4 rounded">Register</button>
                </Link>

                <Link to="/Login">
                    <button className="bg-green-500 text-white py-2 px-4 rounded">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
