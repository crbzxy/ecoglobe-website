import React, { useEffect } from "react";
import Invierte from "../img/camioneta.jpeg"
import { LazyLoadImage } from "react-lazy-load-image-component";
function Faq() {

  useEffect(() => {
    // Fetch all the details element.
    const details = document.querySelectorAll("details");
    // Add the onclick listeners.
    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        // Close all the details that are not targetDetail.

        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, []);


  return (
    <div className=" contenedor Faq">
      <h1>Preguntas Frecuentes</h1>

      <div className="contenedor-preguntas">
        <div className="img-preguntas">
          <LazyLoadImage effect="blur" src={Invierte} alt="Eco Globe, tu mejor solución en paneles solares" />
        </div>
        <div className="preguntas">
          <details>
            <summary>¿Qué es un sistema Interconectado a la red?</summary>
            <p> Un sistema de paneles solares interconectados a la red es simplemente un
              sistema que está conectado a la red eléctrica de CFE y, por lo tanto,
              utiliza la electricidad tanto del sistema de paneles solares como de la
              red eléctrica. Debido a esto, un sistema solar interconectado no tiene
              que satisfacer todas las demandas de electricidad del hogar.</p>
          </details>

          <details>
            <summary>¿Si se va la luz, con los paneles tendré luz? </summary>
            <p>Sí es un sistema interconectado a la red de CFE, si se va la luz no
              tendrás luz, a menos de que cuentes con un sistema híbrido (sistema
              interconectado a CFE + baterías) y puedas utilizar las baterías de
              respaldo.</p>
          </details>
          <details>
            <summary>¿Cómo sé que una empresa es confiable? </summary>
            <p>Que cumpla con conocimiento y experiencias comprobables en el sector fotovoltaico, con portafolios de proyectos en su página web, testimonios de clientes, para asegurar que responderán una vez instalados los paneles y te proporcionarán asesoría y servicio de mantenimiento cuando sea necesario.
            </p>
          </details>
          <details>
            <summary>¿Los paneles de más capacidad son los mejores? </summary>
            <p>No, depende de la aplicación. para granjas solares son recomendables los grandes, pero para casas son recomendables más chicos, ya que ocupan menos espacio, son más ligeros y más aptos para los techos. Lo importante es que sean paneles de la mejor calidad.
            </p>
          </details>
          <details>
            <summary>¿Qué son los kilowatts? </summary>
            <p>Es la unidad de medida usada por CFE para cobrar el consumo, si tenemos 10 focos de 100 watts y los usamos una hora consumiremos 1 kw-hora.
            </p>
          </details>
          <details>
            <summary>¿Si pongo paneles ya no pago nada a CFE?</summary>
            <p>
              Aunque generes el 100%, se paga una renta mínima, que es alrededor de $80 pesos por la renta del servicio.
            </p></details>
          <details>
            <summary>¿Cuántos paneles necesito? </summary>
            <p>Depende de tu consumo o pago a cfe, así como de tus planes a instalar otros equipos, como aires acondicionados, entre otros, que pueden incrementar el consumo. también se debe tomar en cuenta, cuánto quieres ahorrar, el porcentaje de ahorro puede ir desde el 100%, 80%, 50%, etc.
            </p>
          </details>
          <details>
            <summary>¿Los paneles son solo para los que pagan mucho?</summary>
            <p>
              Es una excelente opción para los que pagan mucho, pero también para los que pagan poco, pero quieren instalar aires acondicionados, estufa eléctrica, secadora eléctrica, calentón eléctrico, etc. para que no incremente la tarifa.
            </p></details>
        </div>
      </div>
    </div>
  );
}

export default Faq;
