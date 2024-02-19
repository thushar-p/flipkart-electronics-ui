import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register({ role }) {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistration = async (event) => {
    event.preventDefault();

    // fire a requst to the server using axios
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/register",
        {
          userEmail: userEmail,
          userPassword: password,
          userRole: role,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.status == 202) {
        sessionStorage.setItem("email", userEmail);
        console.log(showVerifyOTP);
        navigate("/verify-otp");
      }
    } catch (error) {
      console.log(error);
    }
  };

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex items-center justify-center w-svw py-12 sm:py-16 md:py=20 lg:py-28">
      {/* form section */}
      <div className="border shadow-lg shadow-slate-500 border-slate-300 w-72 h-80 rounded-xl flex justify-center items-center md:w-3/6">
        <table className="h-auto w-4/5 text-center">
          <h2 className="font-semibold">Register Here</h2>
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
                type="submit"
                className="rounded-lg mt-2 px-4 py-1 bg-green-300 hover:bg-green-600 hover:text-white hover:font-semibold ${passwordMatch ? disabled : enabled} "
                onClick={handleRegistration}
              >
                Submit
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <p className="mt-2">
                Already a user?
                <Link
                  to={"/login"}
                  className="text-blue-500 hover:underline hover:underline-offset-2 hover:font-semibold"
                >
                  Login
                </Link>
              </p>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Register;
