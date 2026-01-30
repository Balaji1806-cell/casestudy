import { Link } from "react-router-dom";

export default function Temp() {
  return (
    <>
      <h1>This is the Starting Page!</h1>

      <Link to="/login">
        <button>Login</button>
      </Link>

      <Link to="/signup">
        <button>Register</button>
      </Link>
    </>
  );
}
