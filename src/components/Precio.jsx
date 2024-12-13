import React from "react";
 import iconoPesos from '../assets/header/iconoPesos.png'
function Precio({ dolar, cent='00' , estilosimg = ' h-[60px] mb-3.5 ' ,estilosTextoGrande='!text-60  ', estilosTextoPequenio = 'text-48   '}) {
  return (
    <div className= "flex items-end -skew-x-12 font-ultra-bold text-f7527a  ">
    <img src={iconoPesos} alt="$"  className={`${estilosimg}`}/>
      <h5 className={`${estilosTextoGrande} `}>{dolar},</h5>
      <h6 className={`${estilosTextoPequenio}`}>{cent}</h6>
    </div>
  );
}

export default Precio;
