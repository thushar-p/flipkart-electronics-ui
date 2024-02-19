import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const {auth, setAuth} = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/login";
    const body = {
      userEmail: userEmail,
      userPassword: password,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials : true,
    };

    try {
      const response = await axios.post(URL, body, header);
      console.log(response);
      if (response.status === 200) {
        const user = {
          userId: response.data.data.userId,
          username: response.data.data.username,
          role: response.data.data.role,
          isAuthenticated: response.data.data.authenticated,
          accessExpiration: response.data.data.accessExpiration,
          refreshExpiration: response.data.data.refreshExpiration,
        };
        localStorage.setItem("user", JSON.stringify(user))
        setAuth(user)
        // console.log(auth);
        navigate("/");
      }
    } catch (error) {
      console.log("cannot login");
      console.log(error);
    }
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex items-center justify-center w-svw py-28">
      {/* form section */}
      <div className="md:w-3/6 border shadow-lg shadow-slate-500 border-slate-300 w-72 h-64 rounded-xl flex justify-center items-center">
        <table className="h-auto w-4/5 text-center">
          <h2 className="font-semibold">Login Here</h2>
          <tr>
            <td>
              <input
                className="border rounded-md outline-none focus:border-blue-800 focus:border-1 ease-in-out duration-300 w-11/12 py-1 pl-2 mt-2"
                type="email"
                placeholder="Email"
                onChange={(event) => setUserEmail(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <input
                className="border rounded-md outline-none focus:border-blue-800 focus:border-1 ease-in-out duration-300 w-11/12 py-1 pl-2 mt-2"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td className="flex justify-start items-center pl-3 md:pl-4 lg:pl-6 mt-2">
              <input id="check" type="checkbox" onClick={toggleShowPassword} />
              <label htmlFor="check" className="pl-2">
                {showPassword ? " Hide Password" : " Show password"}
              </label>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="rounded-lg px-4 py-1 bg-green-300 hover:bg-green-600 hover:text-white hover:font-semibold ${passwordMatch ? disabled : enabled} "
                onClick={handleLogin}
              >
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <p className="mt-2">
              New user?
              <Link
                to={"/customer/register"}
                className="text-blue-500 hover:underline hover:underline-offset-2 hover:font-semibold"
              >
                Register
              </Link>
            </p>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Login;
