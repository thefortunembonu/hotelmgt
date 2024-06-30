"use client";
import React, { useState } from "react";
import Headertext from "../Headertext";
import {
  BsEnvelopePaper,
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsTwitterX,
} from "react-icons/bs";

function ContactUs() {
  const [email, setEmail] = useState("");

  return (
    <section className="px-12 py-24">
      <div>
        <Headertext>Book Your Stay</Headertext>
      </div>
      <div className="md:px-80 px-4 mb-6">
        <h2 className="bodytext !text-center">
          Experience the magic of Serene Escapes. Book your stay today and
          embark on a journey of luxury, comfort, and unforgettable memories.
        </h2>
      </div>

      <div>
        <Headertext>Contact Us</Headertext>
      </div>
      <div className="bodytext !text-center mb-6">
        <h2 className="flex gap-5 justify-center items-center">
          <span>
            <BsEnvelopePaper />
          </span>
          reservations@sereneescapes.com
        </h2>
        <h2 className="flex gap-5  justify-center items-center">
          <span>
            <BsTelephone />
          </span>
          +1 (800) 123-4567
        </h2>
      </div>

      <div>
        <Headertext>Follow Us</Headertext>
      </div>
      <div className="flex justify-center bodytext mt-4 gap-5">
        <BsFacebook />
        <BsTwitterX />
        <BsInstagram />
      </div>
      <div className="mt-4">
        <div>
          <Headertext>Subscribe to Our Newsletter</Headertext>
        </div>
        <div className="flex justify-center bodytext mt-4 mb-4">
          <input
            type="email"
            placeholder="E-mail Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-[350px] h-12 px-4 border border-orange-400 rounded-s-md"
          />
          <button className="bg-orange-400 rounded-r-md py-1 px-3 text-white hover:bg-orange-600">
            Subscribe
          </button>
        </div>
        <div className="bodytext !text-center md:px-80 px-8">
          <p>
            Stay updated with our latest news, offers, and travel tips by
            subscribing to our newsletter.
          </p>

          <p className="mt-2">
            At Serene Escapes Hotels & Resorts, your comfort is our priority. We
            look forward to welcoming you to a world of tranquility and
            elegance.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
