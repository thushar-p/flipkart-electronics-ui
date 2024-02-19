import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyOTP() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = sessionStorage.getItem("email");
  

  const handleVerifyOTP = async (event) => {
    event.preventDefault();

    const URL = "http://localhost:8080/api/v1/verify-otp";
    const body = {
      userEmail: email,
      userOTP: otp,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials : true
    };
    
    console.log(email)

    try {
      const response = await axios.post(URL, body, header);
      if (response.status == 201) {
        console.log(response);
        sessionStorage.removeItem("email");
        navigate("/login");
      } else {
        console.log("try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-96 py-28">
      <div className=" flex flex-col items-center w-4/5 py-7 rounded-xl border shadow-lg shadow-slate-500 border-slate-300">
        <h2 className="font-semibold mb-2">Verify OTP</h2>
        <input
          onChange={(event) => setOtp(event.target.value)}
          className="w-11/12 [&::-webkit-inner-spin-button]:appearance-none border-blue-500 py-2 pl-2 border outline-none rounded-lg appearance-none"
          type="number"
          placeholder="Enter OTP"
        />
        <button
          onClick={handleVerifyOTP}
          className="w-11/12 mt-2 py-2 rounded-lg font-semibold bg-green-300 hover:bg-green-700 hover:text-white"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default VerifyOTP;
