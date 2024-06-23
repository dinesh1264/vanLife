import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { LoadingPage } from "./LoadingPage";

export const Van = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);
    
  let bgColor = {
    Simple: "bg-[#E17654]",
    Rugged: "bg-[#115E59]",
    Luxury: "bg-[#161616]",
  };

  const vanElements = vans.map((van) => (
    <div key={van.id} className="ml-16 mr-16 mb-16">
      <Link to={`/vans/${van.id}`}>
        <img className=" w-full mb-0 pb-5" src={van.imageUrl} alt={van.name} />
        <div className="text-3xl font-black flex">
          <p className="basis-5/6">{van.name}</p>
          <p className="pl-10">
            ${van.price} <span className="font-medium text-xl">/day</span>
          </p>
        </div>

        <i
          className={`${
            bgColor[van.type]
          } w-24 h-12 p-3 text-center text-xl text-[#FFF7ED] font-medium rounded-md`}
        >
          {van.type}
        </i>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="bg-[#FFF7ED]">
        <p className="font-bold text-5xl pl-14">Explore Our Van Options</p>

        <div className="grid grid-cols-2 pb-12 mt-20">{vanElements }</div>
      </div>
    </>
  );
};
