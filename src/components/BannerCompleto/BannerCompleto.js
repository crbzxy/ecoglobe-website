import React from "react";
import { Link } from "react-router-dom";

function BannerCompleto() {
  //const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);

  return (
    <>
      <section className="banner-completo">
        <div className="contenedor-banner">
          <p className="titulo-banner">
            En Eco Globe le damos prioridad a la calidad, por eso todos nuestros empleados y marcas aliadas cuentan con las certificaciones necesarias para desarrollar nuestros proyectos.
          </p>
          <p>
            Ponte en contacto y recibe una cotización personalizada

          </p>
          <Link className="btn-primario" to="/contacto">
            ¡Cotiza ahora!
          </Link>
        </div>
      </section>
    </>
  );
}
export default BannerCompleto;
