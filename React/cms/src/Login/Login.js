// import "./Login.css"
// function Login(){
//     return(
//         <>
//        <div class="form-container">
//     <h2>Login</h2>
//     <form>
//       <input type="email" placeholder="Username" required />
//       <input type="password" placeholder="Password" required />
//       <button type="submit">Login</button>
//     </form>
//   </div>
// </>
//     )
// };

import { Link } from "react-router-dom";
import "./Login.css"
export default function Login() {
  return (
    <div className="login-container">
  <h1>Login Page</h1>

  <form className="login-form">
    <input type="email" placeholder="Username" required />
    <input type="password" placeholder="Password" required />
<Link to="/home">
    <button type="submit">Login</button>
    </Link>

    <Link to="/signup" className="register-link">
      Register
    </Link>
  </form>
</div>

  );
}
