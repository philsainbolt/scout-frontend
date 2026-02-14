import { Link } from "react-router-dom"

function Navbar() {
  return (

    <div className="navbar-section">
      <Link to="/aboutus"><button className="about-us">About Us</button></Link>

      <Link to="/employerlogin"><button className="employer-login-btn">Employer Login</button></Link>
      
    </div>
  );
}

export default Navbar;
