"use client";
import React, { useState } from "react";
import Headertext from "../Headertext";

function LoginModal({ open, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleopen = () => setOpen((prev: any) => !prev);
  return (
    <div>
      {open ? (
        <div
          onClick={handleopen}
          className=" fixed w-full h-full bg-black/40 px-72 py-40 z-10"
        >
          <form className="mx-auto  max-w-[420px] bg-white/90 px-12 py-12 rounded-lg ">
            <div className="py-4">
              <Headertext>Login</Headertext>
            </div>

            <div className="flex flex-col items-center gap-4">
              <input
                type="email"
                placeholder="E-mail Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-orange-400 rounded-md"
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 border border-orange-400 rounded-md"
              />

              <button
                onClick={handleopen}
                className="w-full text-white bg-orange-400 py-3 rounded-md
              hover:bg-orange-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default LoginModal;
