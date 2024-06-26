"use client";

import React, { useState } from "react";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleclick = () => {
    setOpen((prev) => !prev);
  };

  const Holder = () => (
    <div className="min-w-[300px] flex-col items-start mr-auto flex transition bg-cyan-800/95 p-4">
      <button className="mb-2">Home</button>
      <button className="mb-2">Contact</button>
      <button>Reservations</button>
    </div>
  );

  return (
    <nav className="absolute right-0">
      <aside className="w-full min-h-[630px] text-white flex overflow-hidden shadow-lg">
        <div
          onClick={handleclick}
          className={`bg-cyan-800/40 backdrop-blur-[0.175rem] border-l border-black/20 min-w-[50px] min-h-[630px] right-0 flex items-center justify-center hover:bg-cyan-800/95 transition-transform text-2xl `}
        >
          {open ? <BsChevronCompactRight /> : <BsChevronCompactLeft />}
        </div>
        {open && <Holder />}
      </aside>
    </nav>
  );
}

export default Navbar;
