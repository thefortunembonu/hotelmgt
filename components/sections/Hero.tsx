import React from "react";
import backgroundImage from "../public/Images/heroImage.jpg";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <div className="px-8">
        <span className="absolute top-[40px] left-[75px] sm:left-[130px] font-medium text-sm uppercase">
          Serene Escapes <br />
          <span className="text-xs"> Hotels & Suites</span>
        </span>
        <div className="px-8 sm:px-24 text-left md:max-w-[700px] mt-20">
          <h1 className="text-5xl md:text-6xl leading-16 font-bodoni font-medium ">
            Discover a World of
            <span className="text-orange-400">Tranquility</span> and
            <h1 className="text-orange-400 mx-2 ">Elegance</h1>
          </h1>
          <hr className="border-1 border-white/50 my-4 "></hr>
          <h3 className="text-sm font-poppins font-light mt-3">
            We believe that every journey should be an experience of
            unparalleled comfort and luxury.
          </h3>
          <div className="mt-2">
            <button className="primary_btn">
              {" "}
              Book Your Stay
              <span>
                <BsArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
