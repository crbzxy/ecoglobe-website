import Home from './views/Home';
import Servicios from './views/Servicios';
import Nosotros from './views/Nosotros';
import Contacto from './views/Contacto';
import PanelAire from './views/PanelAire';
import Faq from './views/Faq';
import Success from './views/Success';
import Aviso from './views/Aviso';
import PanelesSolares from './views/PanelesSolares';
import PanelesSolaresAutonomos from './views/PanelesSolaresAutonomos';
import ProyectoElectricos from './views/ProyectosElectricos';
import AireAcondicionado from './views/AireAcondicionado';

export const appRoutes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Servicios },
  { path: '/nosotros', component: Nosotros },
  { path: '/contacto', component: Contacto },
  { path: '/panel-mas-aire', component: PanelAire },
  { path: '/faq', component: Faq },
  { path: '/success', component: Success },
  { path: '/aviso', component: Aviso },
  { path: '/paneles-solares', component: PanelesSolares },
  { path: '/paneles-solares-autonomos', component: PanelesSolaresAutonomos },
  { path: '/soluciones-en-electricidad', component: ProyectoElectricos },
  { path: '/aire-acondicionado', component: AireAcondicionado },
];

