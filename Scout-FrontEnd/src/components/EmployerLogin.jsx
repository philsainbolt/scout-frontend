import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EmployerLogin = () => {

  return (
    <div >
      <div>
        <h2>Employer Login</h2>
        
        <form>
          <div >
            <label >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@company.com"
            />
          </div>

          <div >
            <label htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              placeholder="••••••••"
            />
          </div>

          <button type="submit" >
            Sign In
          </button>
        </form>

        <div >
          <p >Don't have an account?</p>
          <Link to="/employerregistration">
          <button >
            Sign Up
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmployerLogin;