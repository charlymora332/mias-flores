import React from "react";

function Tarjetas({ img, imgAlt = "tarjet", titulo, texto }) {
  return (
    <div className="relative h-20 w-auto">
      <img src={img} alt={imgAlt} className="absolute z-10" />
      <div className="absolute w-2/3 right-0 top-1/2 -translate-y-1/2 z-50">
        <h4>{titulo}</h4>
        <h6>{texto}</h6>
      </div>
    </div>
  );
}

export default Tarjetas;
