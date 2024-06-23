import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const VanDetail = () => {
  const [vans, setVans] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, [params.id]);

  const bgColor = {
    Simple: "bg-[#E17654]",
    Rugged: "bg-[#115E59]",
    Luxury: "bg-[#161616]",
  };

  return (
    <div className="bg-[#FFF7ED] pl-16 pr-14 pb-32">
        
      <NavLink
        className={({ isActive }) => (isActive ? "underline" : none)}
        to="/vans"
      >
        <div className="pb-12 font-medium flex flex-row">
          <img
            src="/SystemUiconsArrowLeft.svg"
            alt="Arrow pointing to go back to the previous page"
          />{" "}
          <p className="text-3xl pl-2">Back to all vans</p>
        </div>
      </NavLink>

      <img className="h-full w-[900px]" src={vans.imageUrl} alt="" />
      <div className="mt-10">
        <p
          className={`${
            bgColor[vans.type]
          } h-16 w-40 pt-3 text-center rounded-xl text-[#FFF7ED] font-medium text-3xl`}
        >
          {vans.type}
        </p>
        <h1 className="text-7xl font-bold pt-8">{vans.name}</h1>
        <p className="text-4xl pt-8 font-medium">
          <span className="font-bold text-[45px]">${vans.price}</span>/day
        </p>
        <p className="text-3xl font-medium py-10">{vans.description}</p>
      </div>
      <button className="w-full text-3xl text-white font-semibold p-8 my-5 text-center bg-[#FF8C38] mb-5 rounded-lg hover:-translate-y-3">
        Rent this van
      </button>
    </div>
  );
};
