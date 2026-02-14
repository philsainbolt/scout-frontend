import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployerLogin = () => {
  return (
    <div className="Employer-page">
    <form className="Employer-Login-Page">
        <h3> Employer Login</h3>

        <div className="form-input">
          <label>Email Address</label>
          <input id="email" type="email" placeholder="you@company.com" />

          <label htmlFor="password">Password</label>
          <input id="password" type="password" placeholder="••••••••" />

          <Link to="/employerportal" >
            <button type="submit" className="sign-in-button">Sign In</button>
          </Link>

          <p>Don't have an account?</p>
          <Link to="/employerregistration">
            <button className="sign-up-button">Sign Up</button>
          </Link>
        </div>
      </form>
      </div>

      
  );
};

export default EmployerLogin;
