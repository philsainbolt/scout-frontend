import { Link } from "react-router-dom"

function Navbar() {
  return (

    <div className="navbar-section">
      <button className="about-us">About Us</button>

      <Link to="/employerlogin"><button className="employer-login">Employer Login</button></Link>
      
    </div>
  );
}

export default Navbar;
