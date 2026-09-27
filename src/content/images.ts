import logo from "../img/logo.png";
import logoFooter from "../img/logo-f.png";
import nosotros from "../img/nosotros-home.png";
import nosotrosAlt from "../img/nosotros-home2.png";
import panel from "../img/panel.png";
import sistema from "../img/sistema.png";
import electrico from "../img/pe.png";
import servicios from "../img/servicios.png";
import sunac from "../img/sunac.png";
import aire from "../img/Aire.png";
import airePanel from "../img/AireP.png";
import camioneta from "../img/camioneta.jpeg";
import canadianSolar from "../assets/brands/canadian-solar.svg";
import enphaseEnergy from "../assets/brands/enphase-energy.svg";
import firstSolar from "../assets/brands/first-solar.svg";
import outback from "../assets/brands/outback.png";

export const images = {
  logo,
  logoFooter,
  hero: nosotros,
  about: nosotrosAlt,
  serviceGrid: panel,
  serviceOffGrid: sistema,
  serviceElectric: electrico,
  servicesHero: servicios,
  panelBenefits: sunac,
  air: aire,
  airSolar: airePanel,
  faq: camioneta
} as const;

export const brandLogos = [
  { src: canadianSolar, label: "Canadian Solar" },
  { src: enphaseEnergy, label: "Enphase Energy" },
  { src: firstSolar, label: "First Solar" },
  { src: outback, label: "OutBack Power" }
];
