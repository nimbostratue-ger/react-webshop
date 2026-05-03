import React from 'react'
import './Price.css'
import Input from '../../Components/Input/Input'

export default function Price({handleRadio}) {
    const prices = ['All', '$0-50', '$50 - $100', '$100 - $150', 'Over $150']

  return (
    <div className='priceContainer'>
      <h1>Price</h1>
      {prices.map((item, index) => (
        <Input key={index} 
        handleRadio={handleRadio} 
        title={item}
        value={item==='All'?'':item} 
        name="price" 
        defaultChecked={item==='All'} />
      ))}
    </div>
  )
}
