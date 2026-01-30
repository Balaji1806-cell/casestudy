import { Link } from "react-router-dom";
import "./Signup.css"
function Signup(){
    return(
        <>
       <div class="form-container">
    <h2>Signup</h2>
    <form>
      <input type="text" placeholder="Username" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <Link to="/login">
      <button type="submit">Signup</button>
      </Link>
    </form>
  </div>
</>
    )
};
export default Signup;