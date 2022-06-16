import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className=" contenedor Error">

      <h2>Pagina no encontrada</h2>
      <p style={{fontSize:"4rem"}}>⛈️</p>
      <Link className="btn-primario" to="/">Volver al inicio</Link>
    </div>
  );
}

export default Error;
