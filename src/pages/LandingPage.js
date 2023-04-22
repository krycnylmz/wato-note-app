import React from "react";
import bg from "../bg.png";
import logo from "../logo_white.png";
import { Link } from "react-router-dom";
function LandingPage() {
  return (
    // backgroundImage
    <div
      className="bg-cover bg-center h-screen w-screen pt-8"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-row items-center justify-center h-20 max-w-3xl sm:m-auto mx-4 bg-purple-700 rounded-3xl ">
        <img src={logo} alt="logo" className="h-10 w-auto" />
      </div>
      <p className="flex min-w-96 max-w-3xl text-[5rem] text-zinc-50 m-auto mt-24 px-4 sm:px-0">Take Notes and Fun!</p>

      {/* Buttons */}
      <div className="flex flex-row text-center w-48 justify-between m-auto mt-24">
        <Link to="login" className="w-18 h-11 rounded-lg  text-center text-zinc-50  font-medium">
          Login
        </Link>
        <span className="w-auto h-11 rounded-lgtext-center text-zinc-50  font-light mt-2">|</span>
        <Link to="signup" className="w-24 h-11  rounded-lg bg-purple-700 text-center text-zinc-50  font-medium">
          Sign Up
        </Link>

      </div>

      <ul className="w-screen h-28 bottom-0 absolute flex flex-row justify-between p-8 sm:px-32 text-sm sm:text-3xl list-disc text-purple-100">
        <li>Free</li>
        <li>Easy to Use</li>
        <li>Fun</li>
        <li>Responsive Design</li>
        
      </ul>
    </div>
  );
}

export default LandingPage;
