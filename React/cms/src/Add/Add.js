// import { useState } from "react";
// function Example() {
//   const [name, setName] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Hello {name}</p>
//     </>
//   );
// }
// export default Example;
//  import { useState } from "react";

// function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <nav>
//       {isLoggedIn ? (
//         <>
//           <a href="#">Home</a> |{" "}
//           <a href="#">Profile</a> |{" "}
//           <button onClick={() => setIsLoggedIn(false)}>
//             Logout
//           </button>
//         </>
//       ) : (
//         <button onClick={() => setIsLoggedIn(true)}>
//           Login
//         </button>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState({ email: "", password: "" });

  const updateForm = (e) => {
    const name = e.target.name.trim();
    const value = e.target.value;

    const updatedInput = { email: input.email, password: input.password };
    updatedInput[name] = value;

    setInput(updatedInput);
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert("success");
  };

return (
    <>
      <form onSubmit={submitForm}>
        EMAIL:
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={updateForm}
        />
        <br />
        PASSWORD:
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={updateForm}
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Form;

