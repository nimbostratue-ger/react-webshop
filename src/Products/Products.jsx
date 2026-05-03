import React from 'react'
import './Products.css'
import Card from '../Components/Card/Card'

export default function Products({filtered}) {
  return (
    <div className='productsContainer'>
     {filtered&&filtered.map( (item, index) => 
     <Card key ={index} item={item}/>)}
    </div>
  )
}
