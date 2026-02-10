import JobListContainer from "./components/JobListContainer";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import { Routes, Route} from "react-router-dom"
import EmployerLogin from "./components/EmployerLogin";
import EmployerRegistration from "./components/EmployerRegistration";
import EmployerPortal from "./components/EmployerPortal"
import { Link } from "react-router-dom";


function App() {
  
  return(
   <>
  <Link to="/">
  <Image />
  </Link>  
  

  <Routes >  

  <Route path="/" element={<div>
  <Navbar />  
  <MainContainer />
  <JobListContainer/>
  </div>} />

   <Route path="/employerlogin" element={<EmployerLogin/>}/>
   <Route path="/employerregistration" element={<EmployerRegistration/>} />
   <Route path="/employerportal" element={<EmployerPortal/>} />
    

  </Routes>  


  </>

  )  
  
}

export default App;
