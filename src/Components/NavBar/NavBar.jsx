import React from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { FaCartArrowDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <section className="bg-[#0D7C66] text-white p-2 ">
      <div id="dower"></div>
      <div id="Navbar" className="flex justify-around">
        <div id="img">
          <img
            className="w-48"
            src="https://i.ibb.co/zJ6jP5T/logo.png"
            alt=""
          />
        </div>
        <div id="search" className="my-auto flex text-black">
          <input
            type="text"
            name=""
            className="border-2 p-1 rounded-xl w-72"
            id=""
          />
          <FaSearch className="my-auto text-2xl bg-white border-l-2 border-[#0D7C66] p-1 -ml-7"></FaSearch>
        </div>
        <div id="routes" className="my-auto">
          <ul className="flex gap-5 font-bold my-auto">
            <NavLink to={'/'}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink to={'/products'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }>
              <li>All Products</li>
            </NavLink>
            <NavLink to={'/about-us'} className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }>
              <li>About Us</li>
            </NavLink>
          </ul>
        </div>
        <div id="buttoms" className="flex gap-5">
          <button className="flex btn gap-1 btn-sm my-auto text-[#0D7C66] font-semibold">
            <FiLogIn></FiLogIn>LogIn
          </button>
          <button className="flex btn gap-1 btn-sm my-auto text-[#0D7C66] font-semibold">
            <FaCartArrowDown></FaCartArrowDown>CartLogIn
          </button>
          <button>Become a Seller</button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
