import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Lesson from './pages/Lesson';

import TutorPage from './pages/Tutorpage';










const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
     
        <Route path="/lesson" element={<Lesson/>}/>
        <Route path="/tutors" exact element={<TutorPage />} />

        
        

        
        
   
       
    
        
        
    
      </Routes>
      
      </BrowserRouter>
      <Footer>
        
      </Footer>
    </div>
  );
};

export default App;