import React, { useState } from "react";
import { Link } from "react-router-dom";

const EmployerLogin = () => {
  return (
    <div>
      <form>
        <div className="form-input">
          <h3> Employer Login</h3>
          <div className="form-group">
            <label>Email Address</label>
            <input id="email" type="email" placeholder="you@company.com" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="••••••••" />
          </div>

          <div>
            <Link to="/employerportal">
              <button type="submit">Sign In</button>
            </Link>
          </div>

          <div>
            <p>Don't have an account?</p>
            <Link to="/employerregistration">
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmployerLogin;
