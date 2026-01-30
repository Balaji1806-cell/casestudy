import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Temp from "../Temp/Temp"; 
import Landing from "../Landing/Landing";
import Home from "../Home/Home";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Temp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/landing" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  );
}
