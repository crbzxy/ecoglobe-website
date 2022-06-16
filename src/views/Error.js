import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className=" contenedor Error">

      <h1>Pagina no encontrada</h1>
      <Link className="btn-primario" to="/">Volver al inicio</Link>
    </div>
  );
}

export default Error;
