import React from 'react'
import './Recommended.css'


export default function Recommended({handleClick}) {
  return (
    <div className='recommendedContainer'>
      <h1>Recommended</h1>

      <div className="buttonsContainer">
        <button value="" onClick={handleClick}>All Products</button>
        <button value="Nike" onClick={handleClick}>Nike</button>
        <button value ="Adidas" onClick={handleClick}>Adidas</button>
        <button value ="Puma" onClick={handleClick}>Puma</button>
        <button value ="Vans" onClick={handleClick}>Vans</button>
      </div>
    </div>
  )
}

