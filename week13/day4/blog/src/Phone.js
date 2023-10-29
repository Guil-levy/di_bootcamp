import React, { useState } from "react";

const Phone = () => {
  const [brand, setBrand] = useState("Samsung");
  const [model, setModel] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year, setYear] = useState("2020");

  const changeColor = () => {
    setColor("blue");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h1> My phone is a {brand}</h1>
      <h4>
        It is a {color} {model} from {year}
      </h4>
      <br />
        <button onClick={changeColor}>Change Color</button>

      <p>{brand}</p>
      <p>{model}</p>
      <p>{color}</p>
      <p>{year}</p>
    </div>
  );
};

export default Phone;
