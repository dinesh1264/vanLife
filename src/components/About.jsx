import React from 'react'

export const About = () => {
  return (
    <div className="bg-[#FFF7ED]">
      <img
        src="/Aimg.svg"
        alt="hero image of the about page"
        className="w-full"
      />
      <div className="pl-14 pr-11 pt-24">
        <p className="font-bold text-6xl pb-14">
          Don’t squeeze in a sedan when you could relax in a van.
        </p>
        <p className="font-semibold text-3xl pb-20">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <br />
          (Hitch costs extra 😉)
          <br />
          <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="bg-[#FFCC8D] h-full rounded-md mb-24">
          <div className='pl-16 pt-16'>
            <p className="font-bold text-5xl pb-14">
              Your destination is waiting.
              <br />
              Your van is ready.
            </p>
            <button className="bg-black text-white rounded-3xl text-4xl font-semibold p-8 mb-16 hover:-translate-y-3">
              Explore our vans
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
