// import { Link } from "react-router-dom";
// import "./Navigation.css"
// import { useState } from "react";
// import Home from "../Home/Home";
// function Navigation(){
//      const [Login,setIsLogin]=useState(false);
//     return(
       
//         <nav> 
//             <center>

            
//             {     
//         Login?(
//             <>
//             <Link to="/home">
//             <a>Home</a>{" | "}
//             </Link>
            
//             <a>About</a>{" | "}
//             <a>Contact</a>{" | "}
//             <button onClick={() => setIsLogin(false)}>Logout</button>
//             </>
//         ):
//         ( <>
//             <a>Home</a>{" | "}
//             <button onClick={() => setIsLogin(true)}>Login</button>
//             </>
//         )
            
//     }
//     </center>
//      <img src="https://static.vecteezy.com/system/resources/thumbnails/015/393/864/small/green-healthcare-logo-design-with-human-life-symbol-illustration-concept-vector.jpg" alt="" width={50} height={50}></img>
//             </nav>
//     )
// };
// export default Navigation;
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <nav className="navbar">
      <h2 className="logo">Nexus</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        
      </div>
    </nav>
  );
}

export default Navigation;
