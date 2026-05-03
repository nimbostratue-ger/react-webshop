import React from "react";
import "./Color.css";
import Input from "../../Components/Input/Input";

export default function Color({ handleRadio }) {
  const colors = ["All", "Black", "Blue", "Red", "Green", "White"];

  return (
    <div className="colorContainer">
      <h1>Color</h1>
      {colors.map((item, index) => (
        <Input key={index}
        handleRadio={handleRadio} 
        title={item}
        value={item==='All'?'':item.toLowerCase()} 
        name="color" 
        defaultChecked={item==='All'} />
      ))}
    </div>
  );
}
