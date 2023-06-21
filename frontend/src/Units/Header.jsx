import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/job-list">Job List</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/registration">Registration</a></li>
          <li><a href="/user-dashboard">User Dashboard</a></li>
          <li><a href="/admin-dashboard">Admin Dashboard</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
