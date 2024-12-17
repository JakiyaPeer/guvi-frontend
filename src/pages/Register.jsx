import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [userType, setUserType] = useState('student'); // 'student' or 'tutor'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://guvi-backend-8.onrender.com/api/auth/login", {
        ...formData,
        role: userType,
      });
      alert('Registration successful! Please login.');
      navigate('/login');
    } catch (error) {
      console.error(error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Register</h1>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          className="w-full mb-3 p-2 border rounded"
          required
        />
        <div className="mb-4">
          <label className="mr-2">
            <input
              type="radio"
              name="userType"
              value="student"
              checked={userType === 'student'}
              onChange={() => setUserType('student')}
            />
            Student
          </label>
          <label className="ml-4">
            <input
              type="radio"
              name="userType"
              value="tutor"
              checked={userType === 'tutor'}
              onChange={() => setUserType('tutor')}
            />
            Tutor
          </label>
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
