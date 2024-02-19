import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";

// https://www.ansonika.com/allaia/header-2.html
// https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/index.html

function Header() {
  return (
    <header className="bg-blue-500 font-poppins">
      <nav className="flex justify-between items-center px-5 py-2 sm:px-7 md:px-12 lg:px-20">
        {/* menu bar */}
        <div className="md:hidden">
          <div className="text-2xl text-white group">
            <i class="fa-solid fa-bars">
              <ul className="hidden font-poppins font-normal text-lg bg-blue-500 h-svh absolute left-0 mt-4 pl-4 pr-16 group-hover:flex group-hover:flex-col">
                <li className="pl-3 py-2 pt-4">Account</li>
                <li className="pl-3 py-2">Orders</li>
                <li className="pl-3 py-2">Wishlist</li>
                <li className="pl-3 py-2">Cart</li>
                <li className="pl-3 py-2">Rewards</li>
                <li className="pl-3 py-2">Gift cards</li>
               <Link to={"/seller/register"}><li className="pl-3 py-2">Become a seller</li></Link>
              </ul>
            </i>
          </div>
        </div>

        {/* company logo */}
        <div>
          <Link>
            <img className="w-20" src="/Assets/Images/flip.png" alt="logo" />
          </Link>
        </div>

        {/* search bar */}
        <div className="w-2/5 hidden sm:flex">
          <input
            className="border rounded-l-xl pl-3 focus:shadow-md focus:shadow-blue-800 ease-in-out duration-300 outline-none w-full h-10 py-1"
            type="text"
            placeholder="Search for products..."
          />
          <button className="border rounded-r-xl focus:shadow-md focus:shadow-blue-800 ease-in-out duration-400 outline-none w-14 h-10 py-1 bg-blue-900 text-white hover:text-xl">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {/* mobile view  */}
        <div className="w-32 text-lg sm:w-24 md:hidden">
          <ul className="flex justify-between text-white">
            <li className="sm:hidden hover:text-yellow-400 ease-in-out duration-200 cursor-pointer group pt-2">
              <i class="fa-solid fa-magnifying-glass"></i>
              <ul className="hidden absolute bg-red-400 left-0 top-14 w-full group-hover:flex group-hover:flex-col">
                <li>
                  <input
                    className="w-full text-md py-2 text-center outline-none text-black"
                    type="text"
                    placeholder="Search for products..."
                  />
                </li>
                <li>
                  <input
                    className="w-full text-md py-2 bg-blue-700 text-white cursor-pointer hover:font-semibold ease-in-out duration-200"
                    type="submit"
                    value={"Search"}
                  />
                </li>
              </ul>
            </li>
            <li className="hover:text-yellow-400 ease-in-out duration-200 cursor-pointer pt-2">
              <i class="fa-solid fa-moon"></i>
            </li>
            <li>
              <Link to={"/login"}>
                <li className="text-md py-2 cursor-pointer mr-2 text-center ease-in-out duration-300 hover:font-semibold">
                  Login
                </li>
              </Link>
            </li>
          </ul>
        </div>

        {/* tab and more */}
        <div className="text-md  lg:text-lg hidden md:flex">
          <ul className="flex justify-between items-center text-white w-48">
            <li className="hover:font-semibold py-3 ease-in-out duration-200 cursor-pointer group">
              {" "}
              Login{" "}
              <FontAwesomeIcon
                icon={faAngleDown}
                className="group-hover:rotate-180 duration-300"
              />
              <ul className="hidden text-blue-500 absolute right-28 lg:right-24 bg-slate-100 mt-3 px-3 lg:px- py-2 rounded-lg shadow-xl shadow-blue-800 group-hover:flex group-hover:flex-col">
                <Link to={"/login"}>
                  <li className="py-2 w-40 lg:w-56 text-center bg-blue-700 text-white rounded-lg ease-in-out duration-300 hover:font-semibold px-4">
                    Login or signup
                  </li>
                </Link>
                <li className="py-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">
                  Account
                </li>
                <Link to={"/seller/register"}>
                  <li className="py-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">
                    Become a seller
                  </li>
                </Link>
                <li className="py-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">
                  Orders
                </li>
                <li className="py-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">
                  Rewards
                </li>
                <li className="py-2 text-center ease-in-out duration-300 hover:text-blue-800 hover:font-semibold hover:underline hover:underline-offset-8">
                  Gift cards
                </li>
              </ul>
            </li>
            <li className="hover:text-yellow-400 ease-in-out duration-200 cursor-pointer">
              <i class="fa-solid fa-moon"></i>
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
