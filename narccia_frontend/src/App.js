import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./data/Navbar";
import Landingpage from "./data/Landingpage";
import Signin from "./data/Signin";
import Signup from "./data/Signup";
import Dashboard from "./data/Dashboard"
import Confirming from "./data/Confirming"
import Forgotpassword from "./data/Forgotpassword"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/home" element={<><Navbar/><Landingpage/></>}/>
        <Route path="/signin" element={<><Navbar/><Signin/></>}/>
        <Route path="/signup" element={<><Navbar/><Signup/></>}/>
        <Route path="/dashboard" element={<><Dashboard/></>}/>
        <Route path="/account-verified/:Id" element={<><Confirming/></>}/>
        <Route path="/forgotpassword" element={<><Forgotpassword/></>}/>
      </Routes>
    </>
  );
}

export default App;
