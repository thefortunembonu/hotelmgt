"use client";
import React, { useState } from "react";
import Headertext from "../Headertext";

function SignUpModal({ open, setOpen }: any) {
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRepassword] = useState("");

  const handleopen = () => setOpen((prev: any) => !prev);
  return (
    <div>
      {open ? (
        <div className=" fixed w-full h-full bg-black/40 px-72 py-12 z-10">
          <form className="mx-auto  max-w-[420px] bg-white/90 px-12 py-12 rounded-lg ">
            <div className="py-4">
              <Headertext>Sign Up</Headertext>
            </div>

            <div className="flex flex-col items-center gap-2">
              <input
                type="email"
                placeholder="E-mail Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 border border-orange-400 rounded-md"
              />

              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                className="w-full h-12 px-4 border border-orange-400 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
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

              <input
                type="password"
                placeholder="Confirm Password"
                name="re_password"
                value={re_password}
                onChange={(e) => setRepassword(e.target.value)}
                className="w-full h-12 px-4 border border-orange-400 rounded-md"
              />

              <button
                onClick={handleopen}
                className="w-full text-white bg-orange-400 py-3 rounded-md
              hover:bg-orange-500"
              >
                Sign Up
              </button>
              <p className="bodytext !textcenter">
                Already have an account? Login
              </p>
            </div>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default SignUpModal;
