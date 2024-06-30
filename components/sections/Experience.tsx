import React from "react";
import Headertext from "../Headertext";
import { BsPeople, BsPersonArmsUp, BsShop } from "react-icons/bs";

function Experience() {
  return (
    <section className="bg-cyan-800 md:rounded-r-full py-32 px-4 md:mr-16">
      <div className="mb-8">
        <Headertext>Unique Experiences Await</Headertext>
      </div>
      <div className="block md:flex md:items-center space-y-8  ">
        <div className="w-full md:w-1/3 md:min-w-[350px] md:px-12 px-16 border-none md:border-r border-slate-50/20">
          <h1 className="headingdark flex gap-2">
            <span>
              <BsPersonArmsUp />
            </span>
            Rejuvenating Spas
          </h1>
          <p className="bodytextdark">
            Indulge in a range of treatments at our tranquil spas. Let our
            skilled therapists pamper you with massages, facials, and holistic
            therapies designed to rejuvenate your mind, body, and spirit.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:min-w-[350px] md:px-12 px-16 border-none md:border-r border-slate-50/20">
          <h1 className="headingdark  flex gap-2">
            <span>
              <BsShop />
            </span>
            Adventure & Exploration
          </h1>
          <p className="bodytextdark">
            Embark on exciting adventures with our curated excursions. Whether
            you&apos;re exploring vibrant cityscapes, pristine beaches, or lush
            landscapes, our team is here to help you discover the hidden gems of
            your destination.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:min-w-[350px] md:px-12 px-16 ">
          <h1 className="headingdark flex gap-2">
            <span>
              <BsPeople />
            </span>
            Family-Friendly Activities
          </h1>
          <p className="bodytextdark">
            Create lasting memories with our family-friendly amenities and
            activities. From kids&apos; clubs to guided tours, there&apos;s
            something for everyone to enjoy at Serene Escapes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
