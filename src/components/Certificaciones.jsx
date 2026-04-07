import React from "react";
import * as FaIcons from "react-icons/fa";

function Certificaciones() {
  return (
    <div className="certificaciones">
      <div className="contenedor">
        <h2 className="text-center" >
          ECO GLOBE CUENTA CON LAS SIGUIENTES CERTIFICACIONES
        </h2>
        <br />
        <div className="certificaciones-contenedor">
          <ul className="certificacion">
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CERTIFICADO DE COMPETENCIA LABORAL EN EL ESTÁNDAR DE
                COMPETENCIA:
              </strong><br />
              EC1180. Supervisión de sistemas fotovoltaicos en residencia,
              comercio e industria.
            </li>
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CERTIFICADO DE COMPETENCIA LABORAL EN EL ESTÁNDAR DE
                COMPETENCIA:
              </strong><br />
              ECO586.1. Instalación de sistemas fotovoltaicos en residencia,
              comercio e industria.
            </li>
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CERTIFICADO DE COMPETENCIA LABORAL EN EL ESTÁNDAR DE
                COMPETENCIA:{" "}
              </strong><br />
              ECO1181. Asesoría Técnica-Comercial en proyectos de generación
              distribuida fotovoltaica.
            </li>
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CAMARA NACIONAL DE PROFESIONALES EN ENERGÍA FOTOVOLTAICA:{" "}
              </strong><br />{" "}
              Diplomado como Profesional en Energía Fotovoltaica.
            </li>
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CÁMARA NACIONAL DE PROFESIONALES EN ENERGÍA FOTOVOLTAICA:{" "}
              </strong><br />
              Delegado General de Baja California.
            </li>
            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>ENPHASE CERTIFICATE OF COMPLETION </strong><br />Enphase
              Ensemble storage online installation training{" "}
            </li>

            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                COLEGIO DE INGENIEROS MECÁNICOS Y ELECTRICISTAS TIJUANA AC{" "}
              </strong><br />
              Perito Eléctrico especialista en Sistema Fotovoltaicos.
            </li>

            <li>
              <FaIcons.FaCertificate />
              <br />
              <strong>
                CAMARA NACIONAL DE PROFESIONALES EN ENERGIA FOTOVOLTAICA
              </strong><br />
              Sistemas interconectados en Generación Distribuida.
            </li>
          </ul>
          <br />
          <h3 className="titulo text-center">
            Cámaras y asociaciones de las que somos parte:<br /><strong style={{ color: "black" }}>CANACINTRA, CPEF, REDEMERE. </strong>
          </h3>

        </div>
      </div>
    </div>
  );
}

export default Certificaciones;
