import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Exito from "../img/exito.svg";
function Success () {
  return (
    <div className=" contenedor Success">
        <hr />
        <br />
      <LazyLoadImage src={Exito} alt="mensaje enviado" />
      <br />
      <h3 className="titulo">Su mensaje ha sido enviado con éxito! </h3>
      <p> A la brevedad nos comunicaremos con usted. </p>

    </div>
  );
}

export default Success;
