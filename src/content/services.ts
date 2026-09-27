import { images } from "./images";

export const serviceCards = [
  {
    title: "Paneles solares interconectados a la red de CFE",
    description:
      "Genera energía para tu propiedad y deja de pagar la tarifa más alta a CFE.",
    image: images.serviceGrid,
    to: "/paneles-solares" as const
  },
  {
    title: "Paneles solares autónomos",
    description:
      "Genera tu propia energía con baterías en lugares donde no existe conexión a la red.",
    image: images.serviceOffGrid,
    to: "/paneles-solares-autonomos" as const
  },
  {
    title: "Soluciones en electricidad",
    description:
      "Diseño, ingeniería, instalación y mantenimiento de proyectos eléctricos personalizados.",
    image: images.serviceElectric,
    to: "/soluciones-en-electricidad" as const
  },
  {
    title: "Aire acondicionado",
    description: "Diseño e instalación de aire acondicionado residencial e industrial.",
    image: images.air,
    to: "/aire-acondicionado" as const
  }
];

export const serviceStandards = [
  {
    title: "Estándares de calidad",
    text: "Certificaciones solares y marcas reconocidas para asegurar el desempeño de cada sistema."
  },
  {
    title: "Garantía de instalación",
    text: "Sistemas y materiales diseñados para operar durante 20 años en óptimas condiciones."
  },
  {
    title: "Mantenimiento y monitoreo",
    text: "Mantenimiento gratuito el primer año y monitoreo para detectar posibles fallas."
  }
];
