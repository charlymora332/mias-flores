import React from "react";
import Header from "../components/Header";
import BtnOrange from "../components/BtnOrange";
import Precio from "../components/Precio";
import Hola from "../components/Hola";
import SliderPrincipal from "../components/SliderPrincipal";
import p1i1 from "../assets/home/p1i1.png";
import p1i2 from "../assets/home/p1i2.png";
import p2i1 from "../assets/home/p2i1.png";
import p2i2 from "../assets/home/p2i2.png";
import { Link } from "react-router-dom";
import SliderProductos from "../components/SliderProductos";
function home() {
  return (
    <div>
      <Header /> {/* Si deseas mostrar un encabezado en todas las páginas */}
      <div className="relative ">
        <div className="h-[calc(100vh-144px)] ">
          <div className="relative z-10  pl-28  flex flex-col  justify-center  h-full ">
            <h1 className="style-4 size ">
              {" "}
              Surprise your favorite
              <br />
              person{" "}
            </h1>
            <span className="flex flex-row my-8">
              <h4 className="style-1  !text-f7527a !font-extrabold">New</h4>{" "}
              <h4 className="style-1 !font-light">
                {" "}
                &nbsp; Rose arrangement with golden vase{" "}
              </h4>
            </span>

            <span className="flex flex-row">
              <Precio dolar={"99"} />
            </span>
            <BtnOrange texto={"Shop now"} />
          </div>

          <div className="h-[calc(100vh-160px)] w-2/3 absolute top-0    z-1 bg-f5f5f5 right-0 rounded-l-[60px]">
            <div className="!z-30 absolute flex right-0 bottom-0 h-full w-2/3  ">
              <SliderPrincipal />
            </div>

            <div className="absolute right-0 bottom-0 rounded-l-full z-20 w-5/6 h-1/3 bg-f6dcdc"></div>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-8 h-64 w-screen my-16 mx-auto ">
          <img src={p1i1} alt="40% SALE" />
          <img src={p1i2} alt="Happy Thanksgiving" />
        </div>

        <div>
          <SliderProductos />
        </div>
       <div className="relative w-full h-max">
 <div className="absolute -z-10 bg-f5f5f5 p-16 ml-[25%] rounded-l-2xl xl:m-0 h-full w-full">

 </div>
      
          <div className="  w-full flex flex-col xl:flex-row gap-8 pl-20 xl:p-0 h-auto bg-transparent ">
            <div className=" relative w-1/2 flex flex-row h-72">
              <div className="relative h-full w-full ">
                <img
                  src={p2i1}
                  alt="Map ubication"
                  className="absolute h-[140%] -bottom-6  object-contain"
                />
              </div>
              <div className="absolute w-full xl:w-auto left-96 top-1/2 -translate-y-1/2">
                <h4 className="style-2 !text-2xl !text-f7527a font-light">
                  Flower delivery to:
                </h4>
                <h5 className="style-2 !text-lg !text-606060 font-light">
                  East Hartford, Hartford, Manchester,
                  <br />
                  Glastonbury, Bolton, Willimantic, West
                </h5>
                <Link
                  to=""
                  aria-label="Contact"
                  className="text-f7527a underline"
                >
                  Track your order.
                </Link>
              </div>
            </div>
            <div className=" relative w-1/2 flex flex-row  h-72">
              <div className="relative h-full  w-full    ">
                <img
                  src={p2i2}
                  alt="icon seguridad"
                  className="absolute h-[125%] w-auto -bottom-6 object-contain"
                />
              </div>

              <div className="absolute w-full xl:w-auto left-[22rem] top-1/2 -translate-y-1/2">
                <h4 className="style-2 !text-2xl !text-f7527a font-light">
                  Our schedule:
                </h4>
                <h5 className="style-2 !text-lg !text-606060 font-light">
                  From <b>09:00</b> am to <b>04:00</b> pm <br /> Monday to
                  Friday{" "}
                </h5>
              </div>
            </div>
        </div>
        </div>
        <h4 className="style-5 !text-3xl">
          Top <b>sellers </b>
        </h4>
      </div>
      <div className="p-4">
        asdfasdfasdf{" "}
        <p className="style-1">
          Este es un párrafo con el estilo `style-1` aplicado.
        </p>{" "}
        <p className="style-2">
          Este es un párrafo con el estilo `style-2` aplicado.
        </p>{" "}
        <p className="style-3">
          Este es un párrafo con el estilo `style-3` aplicado.
        </p>{" "}
        <p className="style-4">
          Este es un párrafo con el estilo `style-4` aplicado.
        </p>{" "}
        <p className="style-5">
          Este es un párrafo con el estilo `style-5` aplicado.
        </p>{" "}
        <p> natalia esta vieja</p>
      </div>
    </div>
  );
}

export default home;
