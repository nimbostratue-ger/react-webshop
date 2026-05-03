import React from 'react'
import './Category.css'
import Input from '../../Components/Input/Input'

export default function Category({handleRadio}) {
      const categories = ['All', 'Sneakers', 'Flats', 'Sandals', 'Heels'];
  return (
    <div className='categoryContainer'>
        <h1>Category</h1>
        {categories.map((item, index)=>     
        <Input key={index} 
         handleRadio={handleRadio} 
         title={item} 
         value={item==='All'?'':item.toLowerCase()} 
         name ='category'
         defaultChecked ={item==='All'}/>
        )}

    </div>
  )
}
//sneakers, flats,sandals,heels