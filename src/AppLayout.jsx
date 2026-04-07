import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import ScrollToTop from './components/scrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { appRoutes } from './routes';
import Error from './views/Error';
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
            message='Hola! 👋🏼,¿Qué podemos hacer por ti?'
            inputPlaceHolder='Escribe un mensaje'
            companyName='Eco Globe'
            sendButtonText='Enviar'
            phoneNumber='+5216643642748'
            replyTimeText='Normalmente responde en una hora'
          />
        </div>
        <Routes>
          {appRoutes.map(({ path, component: PageComponent }) => (
            <Route key={path} path={path} element={<PageComponent />} />
          ))}
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default AppLayout;
