import { FaBolt, FaCalendarAlt, FaHome, FaIndustry } from 'react-icons/fa';

export const counts = [
  {
    Icon: FaHome,
    number: '250+',
    duration: '3',
    label: 'Instalaciones residenciales',
  },
  {
    Icon: FaIndustry,
    number: '150+',
    duration: '3',
    label: 'Instalaciones comerciales',
  },
  {
    Icon: FaCalendarAlt,
    number: '10+',
    duration: '3',
    label: 'Años de experiencia',
  },
  {
    Icon: FaBolt,
    number: '1000+',
    duration: '3',
    label: 'kW instalados',
  },
];

const counterConfig = {
  counts,
};

export default counterConfig;
