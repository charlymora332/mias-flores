import React from "react";
import Precio from "./Precio";
function Productos({
  id,
  img,
  imgAlt = "imagen de producto",
  dolar = "00",
  cent = "00",
  nombre,
  precioNormal,
  etiqueta,
}) {
  console.log(imgAlt, cent);
  return (
    <div className="relative h-[20rem] w-[16rem] border-solid rounded-2xl border-2 border-[#E4E4E4] overflow-hidden mx-auto">
      {etiqueta ? (
        <div className="bg-ffaa01 absolute left-2 top-2 rounded-full w-max  cursor-pointer">
          <h5 className="style-1 !text-xs !text-white  px-2 py-0.5 !font-extrabold -skew-x-12  ">
            {etiqueta}
          </h5>
        </div>
      ) : null}
      <div
        className={`${
          id % 2 == 0 ? "bg-f6dcdc " : "bg-f5f5f5"
        } absolute -z-20 h-1/2 rounded-b-2xl w-full `}
      ></div>
      <div className="w-full h-4/6  pt-4 ">
        <img src={img} alt={imgAlt} className="h-full w-auto mx-auto" />
      </div>
      <div className=" h-2/6 flex flex-col justify-between">
        <p className="style-5  !text-xl !font-extrabold">{nombre}</p>

        <span className="flex flex-row gap-4  mb-4   !text-lg justify-center items-end text-center ">
          <Precio
            dolar={dolar}
            cent={cent}
            estilosTextoGrande="text-2xl !leading-none "
            estilosTextoPequenio="text-18 !leading-none "
            estilosimg="h-6 mb-0"
          />

          {precioNormal ? (
            <h5 className="style-1 !font-thin !text-xs !text-606060">
              ${precioNormal}
            </h5>
          ) : null}
        </span>
      </div>
    </div>
  );
}

export default Productos;
