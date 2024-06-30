"use client";

import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import LoginModal from "./modals/LoginModal";
import SignUpModal from "./modals/SignUpModal";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSignModal, setOpenSignModal] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  const handleclick = () => {
    setOpen((prev) => !prev);
  };

  const AuthLinks = () => {
    return (
      <>
        <div>
          {isAuth ? (
            <>
              <button onClick={handleclick} className="navbtn">
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleclick();
                  setOpenModal(true);
                }}
                className="navbtn"
              >
                Login
              </button>
              <button
                onClick={() => {
                  handleclick();
                  setOpenSignModal(true);
                }}
                className="navbtn"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </>
    );
  };

  const Holder = () => (
    <div className=" w-full md:min-w-[300px] transition bg-cyan-800/95">
      <div className="px-6 pt-4 md:pt-20 text-center hidden md:block">
        <span className=" font-medium text-5xl text-cyan-900 uppercase">
          Serene Escapes <br />
          <span className="text-3xl text-cyan-900 "> Hotels & Suites</span>
        </span>
      </div>
      <div className="pt-32 md:pt-20">
        <button onClick={handleclick} className="navbtn">
          Home
        </button>
        <button onClick={handleclick} className="navbtn">
          Contact
        </button>
        <button onClick={handleclick} className="navbtn">
          Reservations
        </button>
        <AuthLinks />
      </div>
    </div>
  );

  const HolderMobile = () => (
    <div className=" absolute z-10 w-full md:min-w-[300px] transition bg-cyan-800/95">
      <div className="px-6 pt-4 md:pt-20 text-center hidden md:block">
        <span className=" font-medium text-5xl text-cyan-900 uppercase">
          Serene Escapes <br />
          <span className="text-3xl text-cyan-900 "> Hotels & Suites</span>
        </span>
      </div>
      <div className="pt-32 md:pt-20">
        <button onClick={handleclick} className="navbtn">
          Home
        </button>
        <button onClick={handleclick} className="navbtn">
          Contact
        </button>
        <button onClick={handleclick} className="navbtn">
          Reservations
        </button>
        <AuthLinks />
      </div>
    </div>
  );

  return (
    <>
      {openModal && <LoginModal open={openModal} setOpen={setOpenModal} />}
      {openSignModal && (
        <SignUpModal open={openSignModal} setOpen={setOpenSignModal} />
      )}
      <nav className="md:fixed right-0 z-10">
        <aside className="hidden w-full md:min-h-[630px] text-white md:flex overflow-hidden shadow-lg">
          <div
            onClick={handleclick}
            className={`bg-cyan-800/10 backdrop-blur-[0.175rem] border-l border-black/20 min-w-[30px] min-h-[630px] text-slate-500 right-0 flex items-center justify-center hover:bg-cyan-800/95 transition-transform text-2xl `}
          >
            {open ? <BsChevronCompactRight /> : <BsChevronCompactLeft />}
          </div>
          {open && <Holder />}
        </aside>
        <div
          onClick={handleclick}
          className=" md:hidden absolute top-[50px] right-[15px] text-white text-2xl"
        >
          <FaBars />
        </div>
        {open && <HolderMobile />}
      </nav>
    </>
  );
}

export default Navbar;
