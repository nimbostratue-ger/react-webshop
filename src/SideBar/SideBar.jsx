import React from 'react'
import './SideBar.css'
import Color from './Color/Color'
import Price from './Price/Price'
import Category from './Category/Category'

export default function SideBar({handleRadio}) {
  return (
    <div className='sideContainer'>
      <Category handleRadio={handleRadio}/>
      <Price handleRadio={handleRadio}/>
      <Color handleRadio={handleRadio}/>
    </div>
  )
}
