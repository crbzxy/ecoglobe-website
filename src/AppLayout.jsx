import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { appRoutes } from './routes';
import { getRouterBasename } from './utils/routerBasename';

function AppLayout() {
  const routerBasename = getRouterBasename();

  return (
    <div className='App'>
      <Router basename={routerBasename}>
        <ScrollToTop />
        <Navbar />
        <div className='boton-whatsapp'>
          <WhatsAppWidget
            className='whatsapp'
            message='Hola! 👋🏼,¿Qué podemos hacer por ti?'
            placeholder='Escribe un mensaje'
            companyName='Eco Globe'
            sendButton='Enviar'
            phoneNumber='+5216643642748'
            textReplyTime='Normalmente responde en una hora'
          />
        </div>
        <Switch>
          {appRoutes.map(({ path, exact, component: RouteComponent }) => (
            <Route key={path} path={path} exact={exact}>
              <RouteComponent />
            </Route>
          ))}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default AppLayout;

