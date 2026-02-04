import JobListContainer from "./components/JobListContainer";
import MainContainer from "./components/MainContainer";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import { Routes, Route} from "react-router-dom"
import EmployerLogin from "./components/EmployerLogin";
import EmployerRegistration from "./components/EmployerRegistration";


function App() {
  
  return(
   <>
  <Image />

  <Routes >  

  <Route path="/" element={<div>
  <Navbar />  
  <MainContainer />
  <JobListContainer/>
  </div>} />

   <Route path="/employerlogin" element={<EmployerLogin/>}/>
   <Route path="/employerregistration" element={<EmployerRegistration/>} />
    

  </Routes>  


  </>

  )  
  
}

export default App;
