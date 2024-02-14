import React from "react";
import { Link } from "react-router-dom";

// https://www.ansonika.com/allaia/header-2.html
// https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/index.html


function Header() {
  return (
    <header className="bg-blue-300">
      <nav className="flex justify-between items-center px-20 py-4">

        {/* company logo */}
        <div>
          <Link>
            <img className="w-40" src="Assets/Images/flipkartLogo.svg" alt="logo" />
          </Link>
        </div>

        {/* search bar */}
        <div className="w-2/5 ">
          <input className="border rounded-xl pl-3 focus:shadow-md focus:shadow-blue-800 ease-in-out duration-300 outline-none w-full h-10 py-1" type="text" placeholder="Search for products..." />
          {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        </div>

        {/* additional options */}
        <div className="w-36 text-xl">
          <ul className="flex justify-between text-white">
            <li className="hover:text-yellow-400 ease-in-out duration-200 cursor-pointer">
              <i class="fa-solid fa-moon"></i>
            </li>
            <li className="hover:text-blue-700 ease-in-out duration-200 cursor-pointer group">
              <i class="fa-solid fa-user"></i>

              <ul className="hidden text-blue-500 absolute right-16 bg-slate-100 px-6 py-2 rounded-lg shadow-xl shadow-blue-800 group-hover:flex group-hover:flex-col">
                <li className="py-2 w-52 mr-2 text-center bg-blue-700 text-white rounded-lg ease-in-out duration-300 hover:font-semibold px-4">Login or signup</li>
                <li className="py-2 mr-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">Account</li>
                <li className="py-2 mr-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">Become a seller</li>
                <li className="py-2 mr-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">Orders</li>
                <li className="py-2 mr-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">Rewards</li>
                <li className="py-2 mr-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">Gift cards</li>
              </ul>
            </li>
            <li className="hover:text-red-400 ease-in-out duration-200 cursor-pointer">
              <i class="fa-solid fa-heart"></i>
            </li>
            <li className="hover:text-green-700 ease-in-out duration-200 cursor-pointer">
              <i class="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
