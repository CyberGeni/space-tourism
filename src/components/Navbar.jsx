import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import menu from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
function Navbar() {
  const [isActive, setActive] = useState(false);

  function handleClick() {
    isActive ? setActive(false) : setActive(true);
    if (window.innerWidth > 768) {
      setActive(true);
    }
  }
  return (
    <header className=" px-9 py-7 sm:px-0 sm:py-0 mx-auto whitespace-nowrap absolute flex text-white font-Barlow justify-between items-center w-full mt-0 md:mt-12">
      <img className="sm:px-12 md:pl-16" src={logo} alt="" />
      <svg
        className="relative hidden md:block  z-10"
        width="473"
        height="1"
        viewBox="0 0 473 1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect opacity="0.251485" width="473" height="1" fill="white" />
      </svg>
      {isActive ? (
        <div
          onClick={handleClick}
          className="w-screen h-screen absolute bg-white/0 top-0 left-0"
        ></div>
      ) : null}

      <nav
        className={`top-0 right-0 sm:right-0 sm:relative flex-col sm:flex-row h-screen sm:h-fit absolute flex bg-white/5 backdrop-blur-lg px-10 md:px-16 py-8 uppercase sm:space-x-5 md:space-x-8 tracking-widest transition-all
        ${isActive ? "w-[75vw] pt-16 z-50 space-y-8 " : "-right-[75vw]"}
      `}
      >
        <img
          className="absolute w-7 right-8 top-10 sm:hidden"
          onClick={handleClick}
          src={close}
          alt=""
        />
        <NavLink
          to="/"
          exact
          activeClassName="active"
          className="transition-all hover:underline sm:hover:underline-offset-[34px] hover:decoration-4 active:underline"
        >
          <span className="font-semibold sm:hidden md:inline">00 &nbsp; </span>{" "}
          Home
        </NavLink>
        <NavLink
          to="/destination"
          exact
          activeClassName="active"
          className="transition-all hover:underline sm:hover:underline-offset-[34px] hover:decoration-4 active:underline"
        >
          <span className="font-semibold sm:hidden md:inline">01 &nbsp;</span>{" "}
          Destination
        </NavLink>
        <NavLink
          to="/crew"
          exact
          activeClassName="active"
          className="transition-all hover:underline sm:hover:underline-offset-[34px] hover:decoration-4 active:underline"
        >
          <span className="font-semibold sm:hidden md:inline">02 &nbsp;</span>{" "}
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          exact
          activeClassName="active"
          className="transition-all hover:underline sm:hover:underline-offset-[34px] hover:decoration-4 active:underline"
        >
          <span className="font-semibold sm:hidden md:inline">03 &nbsp;</span>{" "}
          Technology
        </NavLink>
      </nav>

      <img onClick={handleClick} className="sm:hidden" src={menu} alt="" />
    </header>
  );
}

export default Navbar;
