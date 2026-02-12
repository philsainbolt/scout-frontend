import { useState } from "react";
import JobListContainer from "./components/JobListContainer";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import { Routes, Route} from "react-router-dom"
import EmployerLogin from "./components/EmployerLogin";
import EmployerRegistration from "./components/EmployerRegistration";
import EmployerPortal from "./components/EmployerPortal"
import AboutUs from "./components/AboutUs"
import { Link } from "react-router-dom";


function App() {
  const [searchParams, setSearchParams] = useState({
    jobTitle: "",
    classification: "",
    location: "",
  });

  return(
   <>
  <Link to="/">
  <Image />
  </Link>


  <Routes >

  <Route path="/" element={<div>
  <Navbar />
  <MainContainer onSearch={setSearchParams} />
  <JobListContainer searchParams={searchParams} />
  </div>} />

   <Route path="/employerlogin" element={<EmployerLogin/>}/>
   <Route path="/employerregistration" element={<EmployerRegistration/>} />
   <Route path="/employerportal" element={<EmployerPortal/>} />
   <Route path="/aboutus" element={<AboutUs/>} />


  </Routes>


  </>

  )

}

export default App;
