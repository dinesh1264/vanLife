import React from 'react'
import {NavLink, Link} from 'react-router-dom'


export const  Header = () => {
  return (
    <div className="bg-[#FFF7ED] py-20 pl-16">
      <header>
        <nav>
          <ul className='flex text-5xl'>
            <li className='basis-4/5 font-black'>
              <Link to="/">#VANLIFE</Link>
            </li>
            <li className='navigation text-2xl'>
              <NavLink to="/about"
              className={({isActive}) => 
              isActive ? 'text-black underline': 'none'}>About</NavLink>
            </li>
            <li className='navigation text-2xl'>
              <NavLink to="/vans" className={({isActive}) => isActive ? 'text-black underline' : 'none'}>Vans</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
