import { images } from "./images";

export type HomeServicePath =
  | "/paneles-solares"
  | "/paneles-solares-autonomos"
  | "/soluciones-en-electricidad";

export const homeStats = [
  { value: "250+", label: "Instalaciones residenciales" },
  { value: "150+", label: "Instalaciones comerciales" },
  { value: "16+", label: "Años de experiencia" },
  { value: "1,000+", label: "kW instalados" }
];

export const homeBenefits = [
  { label: "Ahorro en tu recibo de luz" },
  { label: "Cuidado del medio ambiente" },
  { label: "Plusvalía para tu propiedad" },
  { label: "Garantía de 20 años" },
  { label: "Inversión segura" },
  { label: "Congela tu tarifa eléctrica" }
];

export const homeServices = [
  {
    number: "01",
    title: "Interconexión CFE",
    description: "Baja tu recibo de luz",
    to: "/paneles-solares" as HomeServicePath,
    image: images.serviceOffGrid
  },
  {
    number: "02",
    title: "Sistemas autónomos",
    description: "Independencia con baterías",
    to: "/paneles-solares-autonomos" as HomeServicePath,
    image: images.serviceGrid
  },
  {
    number: "03",
    title: "Electricidad",
    description: "Ingeniería e instalación",
    to: "/soluciones-en-electricidad" as HomeServicePath,
    image: images.serviceElectric
  }
];
