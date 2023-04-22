import React from "react";
import SearchBar from "./SearchBar";
import logo from "../logo_white.png";
import AddNewNote from "./AddNewNote";

function Header() {
  return (
    <header className="w-full bg-zinc-600 h-12">
      <div className="pt-1 flex flex-row  justify-between">
        <img src={logo} className="h-auto w-8 sm:w-14 md:w-auto my-auto mx-4 flex-none" alt="logo" />
        <SearchBar />
        <AddNewNote />
      </div>
    </header>
  );
}

export default Header;
