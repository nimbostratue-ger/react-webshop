import React from 'react'
import './Navigation.css'
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoPerson } from "react-icons/go";

export default function Navigation({query,handleClick}) {
  return (
    <div className='navContainer'>
      <div>
        <input value={query} className='searchInput'
               onChange={handleClick}
               placeholder='Enter you search shoes'/>
      </div>

      <div className='iconsContainer'>
        <FaRegHeart size='24' color='blue' />
        <AiOutlineShoppingCart size={24} color='green'/>
        <GoPerson className='icon' className = 'icon' />
      </div>
    </div>
  )
}
