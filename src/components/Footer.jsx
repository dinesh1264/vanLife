import React from 'react'

export const Footer = () => {
  return (
    <footer className=''>
      <div className="bg-[#252525] text-[#AAAAAA] text-center font-normal p-12 text-[20px]">
        &copy; {new Date().getFullYear()} #VANLIFE
      </div>
    </footer>
  );
}
