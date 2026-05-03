import React from 'react'
import './Card.css'
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Card({item}) {
  // const {img, title, star, reviews, prevPrice, newPrice, company, color, category}= item;
  const {img, title, star, reviews, prevPrice, newPrice}= item;
  return (
    <div className='cardContainer'>
      <img src={img}/>
      <h3>{title}</h3>

      <section>
        {star}{star}{star}{star}
        <span>{reviews}</span>
      </section>

      <section style={{display:'flex', justifyContent:'space-around', padding:'20px 0px'}}>
          <div>
            <del>{prevPrice}</del> &nbsp; {newPrice}
          </div>
          <BsFillBagHeartFill />
      </section>
    </div>
  )
}
