import "./Landing.css";
import Navigation from "../Navigation/Navigation";
import Home from "../Home/Home";
import Contact from "../contact/contact";
import About from "../about/About";
import Footer from "../Footer/Footer";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import Example from "../Add/Add";
import Temp from "../Temppage/Temp";
function Landing({name,course,gender}){
    return(
        <>
        <Navigation/>
        <Home/>
        <Contact/>
        <About/>
        <Signup/>
        <Login/>
        <Footer/>
        <Example/>

        </>
    )
};
export default Landing;