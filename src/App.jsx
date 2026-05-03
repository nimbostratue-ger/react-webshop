import React, { useState, useMemo } from "react";
import "./App.css";
import Recommended from "./Recommended/Recommended";
import Navigation from "./Navigation/Navigation";
import Products from "./Products/Products";

import d from "./database/data";
import SideBar from "./SideBar/SideBar";

const App = () => {
  const [data, setData] = useState(d);
  const [filters, setFilters] = useState({
    query:'', category:'',price:'',color:''
  })

  const handleClick = (e) => 
    setFilters(p=>({...p, query:e.target.value}));
  
  const handleRadio = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch(name){
      case 'category': 
        setFilters(p=>({...p, category:value}));
        break;

      case 'price':
        setFilters(p=>({...p, price:value}));
        break;

      case 'color':
        setFilters(p=>({...p, color:value}))
    }
  }

  const filteredData = useMemo( ()=>data.filter(item=>{
    //Query filter
    const matchQuery =
    filters.query===''||
    item.title.toLowerCase().includes(filters.query.trim().toLowerCase())
    //category filter
    const matchCategory = 
    filters.category ===''||
    item.category===filters.category
    //Color filter
    const matchColor = 
    filters.color ===''||
    item.color ===filters.color
    //price filter
    const itemPrice = Number(item.newPrice);
    const matchPrice = 
    filters.price ===''||
    (filters.price==="$0-50" && itemPrice <=50)||
    (filters.price==="$50 - $100"&& itemPrice>=50 && itemPrice <=100)||
    (filters.price==="$100 - $150" && itemPrice>=100 && itemPrice <=150)||
    (filters.price==="Over $150" && itemPrice>150)

    return matchQuery && matchCategory &&matchPrice && matchColor;
  }),   [data,filters] )

  console.log(filters)
  console.log(data.length, filteredData.length);
  return (
    <div className="appContainer">
      <div className="leftContainer cell">
        <SideBar handleRadio={handleRadio} />
      </div>
      <div className="rightContainer cell">
        <Navigation query={filters.query} handleClick={handleClick} />
        <Recommended handleClick={handleClick} />
        <Products filtered={filteredData} />
      </div>
    </div>
  );
};
export default App;
