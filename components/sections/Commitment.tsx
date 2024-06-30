import React from "react";
import Headertext from "../Headertext";
import { BsBagHeart, BsCake, BsCupHot, BsShop } from "react-icons/bs";

function Commitment() {
  return (
    <section className="px-12 pt-24 pb-24 ">
      <div className="mb-8">
        <Headertext>Our Commitment to Excellence</Headertext>
      </div>
      <div className="md:flex md:items-center block space-y-8  md:space-y-8 px-4">
        <div className="w-full mx-auto md:w-1/3 md:min-w-[350px] md:px-12 border-none md:border-r border-slate-500/20">
          <h1 className=" flex gap-2 heading items-center">
            <span>
              <BsShop />
            </span>
            Luxurious Accommodations
          </h1>
          <p className="bodytext">
            Our rooms and suites are designed with your ultimate comfort in
            mind. Experience the perfect blend of modern amenities and timeless
            elegance, featuring plush bedding, spacious layouts, and stunning
            views.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:min-w-[350px] md:px-12 border-none md:border-r border-slate-500/20">
          <h1 className=" flex gap-2 heading  items-center">
            <span>
              <BsCake />
            </span>
            Exceptional Dining
          </h1>
          <p className="bodytext">
            Savor gourmet cuisine crafted by world-class chefs at our on-site
            restaurants. Whether you&apos;re in the mood for a casual meal or a
            fine dining experience, our diverse menus cater to every palate.
          </p>
        </div>
        <div className="w-full md:w-1/3 md:min-w-[350px] md:px-12">
          <h1 className=" flex gap-2 heading items-center">
            <span>
              <BsBagHeart />
            </span>
            Unmatched Hospitality
          </h1>
          <p className="bodytext">
            From the moment you arrive, our dedicated staff is here to ensure
            your stay is seamless and enjoyable. We pride ourselves on our
            attention to detail and personalized service, creating a home away
            from home for every guest.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Commitment;
