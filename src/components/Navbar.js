import logo from "../assets/logo192.png"
import React, { useState } from "react";

const Navbar = () => {
const [open, setOpen] = useState(false);
return (
    <header className={`flex w-full items-end bg-transparent`}>
      <div className="container">
        <div className="relative mx-4 flex items-end justify-between">
        {/* Brand */}
          <div className="w-60 max-w-full px-4">
            <a href="/" className="block w-full py-5 mx-4">
              <img alt="brand" src={logo} className="brand" width="75"/>
            </a>
          </div>
          <div className="flex flex-row-reverse w-full items-end justify-between px-4">
            <div className="justify-items-end">
              <button onClick={() => setOpen(!open)} id="navbarToggler" className={`${open && "navbarTogglerActive"} absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-indigo-400"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color bg-white"></span>
              </button>
              {/* :className="!navbarOpen && 'hidden' " */}
              <nav id="navbarCollapse" className={`absolute right-0 top-full w-full rounded-lg bg-slate-900 px-6 py-5 shadow lg:static lg:block lg:w-full max-w-full lg:shadow-none lg:dark:bg-transparent ${!open && "hidden"} `}>
                <ul className="block lg:flex">
                  <ListItem NavLink="#home">Home</ListItem>
                  <ListItem NavLink="#portfolio">Portfolio</ListItem>
                  <ListItem NavLink="#about">About</ListItem>
                  <ListItem NavLink="#contact">Contact</ListItem>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
  return (
    <>
      <li>
        <a
          href={NavLink}
          className="flex py-2 text-base font-semibold text-slate-500 hover:text-indigo-300 hover:duration-300 lg:text-white lg:ml-10 lg:inline-flex"
        >
          {children}
        </a>
      </li>
    </>
  );
};