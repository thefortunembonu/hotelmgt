import Image from "next/image";
import React from "react";
import Headertext from "./Headertext";

function Locations() {
  return (
    <section className=" py-32 px-8">
      <div className="mb-8">
        <Headertext>Exceptional Locations</Headertext>
      </div>
      <div className="block mx-auto space-y-8 md:flex md:items-center md:gap-8">
        <div className="w-1/3 min-w-[350px] px-12  border-r border-slate-50/20">
          <Image
            src={"/Images/urban.jpg"}
            alt={"image"}
            width={1000}
            height={1000}
            quality={80}
            priority={true}
            className="w-80 h-56 object-cover rounded-2xl border-r-8 border-cyan-800"
          />
          <h1 className="heading">Urban Retreats</h1>
          <p className="bodytext">
            Stay at our city hotels, where you can immerse yourself in the
            vibrant culture, cuisine, and nightlife of the world’s most exciting
            metropolises. Enjoy easy access to business districts and tourist
            attractions while relaxing in our urban sanctuaries.
          </p>
        </div>
        <div className="w-1/3 min-w-[350px] px-12  border-r border-slate-50/20">
          <Image
            src={"/Images/beach.jpg"}
            alt={"image"}
            width={1000}
            height={1000}
            quality={80}
            priority={true}
            className="w-80 h-56 object-cover rounded-2xl border-r-8 border-cyan-800"
          />
          <h1 className="heading">Beachside Bliss</h1>
          <p className="bodytext">
            Our coastal resorts offer the perfect getaway for sun seekers.
            Lounge on pristine beaches, dive into crystal-clear waters, and
            unwind with oceanfront dining and activities.
          </p>
        </div>
        <div className="w-1/3 min-w-[350px] px-12  border-r border-slate-50/20">
          <Image
            src={"/Images/mount.jpg"}
            alt={"image"}
            width={1000}
            height={1000}
            quality={80}
            priority={true}
            className="w-80 h-56 object-cover rounded-2xl border-r-8 border-cyan-800"
          />
          <h1 className="heading">Mountain Havens</h1>
          <p className="bodytext">
            Escape to our mountain retreats, where you can enjoy fresh air,
            scenic hikes, and cozy fireside evenings. Whether it’s skiing in
            winter or hiking in summer, our mountain locations provide
            year-round enjoyment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Locations;
