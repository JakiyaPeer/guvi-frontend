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
import CourseList from './pages/CourseList';
import CourseDetail from './pages/CourseDetails';
import TutorList from './Components/TutorList';
import TutorProfile from './Components/TutorProfile';
import AboutUs from './pages/AboutUs';
import PaymentPage from './pages/PayementPage';
import Payment from './Components/Payement';
 











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
        <Route path="/course" element={<CourseList/>}/>
        <Route path="/courses" element={<CourseDetail/>}/>
        <Route path="/tutorlist" element={<TutorList/>}/>
        <Route path="/tutors/:id" element={<TutorProfile/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Payement" element={<PaymentPage/>}/>
        <Route path="/payement" element={<Payment/>}/>

        
        

        
        
   
       
    
        
        
    
      </Routes>
      
      </BrowserRouter>
      <Footer>
        
      </Footer>
    </div>
  );
};

export default App;