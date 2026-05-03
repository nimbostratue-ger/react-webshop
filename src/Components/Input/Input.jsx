import React from "react";
import "./Input.css";

export default function Input({
  handleRadio,
  title,
  value,
  name,
  defaultChecked,
}) {
  return (
    <label className="inputItem">
      <input
        type="radio"
        value={value}
        onChange={handleRadio}
        name={name}
        defaultChecked={defaultChecked}
      />
      {title}
    </label>
  );
}
