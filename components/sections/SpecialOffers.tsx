import React from "react";
import Headertext from "../Headertext";
import { BsGift } from "react-icons/bs";

function SpecialOffers() {
  return (
    <section className="bg-cyan-800 md:rounded-s-full py-24 px-8">
      <div className="mb-8">
        <Headertext>Special Offers</Headertext>
      </div>
      <div className="text-center md:px-72 px-12 space-y-8">
        <div>
          <h1 className="headingdark flex gap-2 justify-center items-center">
            <span>
              <BsGift />
            </span>
            Exclusive Packages
          </h1>
          <p className="bodytextdark !text-center">
            Take advantage of our special packages designed to enhance your
            stay. From romantic getaways to family vacations, our tailored
            offers provide excellent value and unique experiences.
          </p>
        </div>
        <div>
          <h1 className="headingdark flex gap-2 justify-center items-center">
            <span>
              <BsGift />
            </span>
            Loyalty Program
          </h1>
          <p className="bodytextdark  !text-center">
            Join our Serene Escapes Loyalty Program and enjoy exclusive
            benefits, including room upgrades, late check-outs, and more. Earn
            points with every stay and redeem them for unforgettable rewards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
