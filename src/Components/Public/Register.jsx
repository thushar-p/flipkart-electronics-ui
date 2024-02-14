import React, { useState } from "react";

function Register({ role }) {
  const [username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const respond = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    console.log(role);
  };

  return (
    <div>
      <input
        className="border-2 border-red-400"
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        className="border-2 border-red-400"
        type="text"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={respond}>Submit</button>
    </div>
  );
}

export default Register;
