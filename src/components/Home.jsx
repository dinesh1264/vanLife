import React from 'react'

export const Home = () => {
  return (
    <div className="bg-[url('/Bimg.svg')] bg-cover text-white bg-no-repeat h-full pl-8">
      <div className='p-20'>
        <p className='pb-24 pt-24 font-bold mg:text-2xl text-8xl'>You got the travel plans, we got the travel vans.</p>
        <p className="pb-40 text-4xl">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="bg-[#FF8C38] h-16 w-[100%] rounded-md font-semibold mb-12 text-2xl hover:-translate-y-2">
          Find your van
        </button>
      </div>
    </div>
  );
}
