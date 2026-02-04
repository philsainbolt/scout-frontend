import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployerRegistration = () => {

  return (
    <div>
      <h2>Employer Registration</h2>
      
      <form>
        <div>
          <label htmlFor="companyName">Company Name</label>
          <input
            id="companyName"
            type="text"
            required
            placeholder="Your Company"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            required
            placeholder="you@company.com"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            placeholder="••••••••"
          />
        </div>
        <Link to="/employerlogin">
        <button type="submit">Register Now</button>
        </Link>
        
      </form>
    </div>
  );
};

export default EmployerRegistration;