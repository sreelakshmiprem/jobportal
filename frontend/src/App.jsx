import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import JobList from './Pages/JobList.jsx';
import JobDetails from './Pages/JobDetails.jsx';
import JobSearch from './Pages/JobSearch.jsx';
import Login from './Pages/Login.jsx';
import Registration from './Pages/Registration.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';
import AdminDashboard from './Pages/AdminDashboard.jsx';
import Profile from './Pages/Profile.jsx';
import SignInPage from './Pages/SignInPage.jsx';
import SignUpPage from './Pages/SignUpPage.jsx';
import Navbar from './Units/Navbar.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/job-list" element ={<JobList/>} />
      <Route path="/job-details/:id" element={<JobDetails/>} />
      <Route path="/job-search" element={<JobSearch/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registration" element={<Registration/>} />
      <Route path="/user-dashboard" element={<UserDashboard/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signinpage" element={<SignInPage/>} />
      <Route path="/signuppage" element={<SignUpPage/>} />
     
      </Routes>
    </div>
  );
};

export default App;