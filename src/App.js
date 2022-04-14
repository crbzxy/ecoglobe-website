import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";
import Home from "./views/Home";
import ScrollToTop from "./components/scrollToTop";
import Error from "./views/Error";
import Servicios from "./views/Servicios";
import Nosotros from "./views/Nosotros";
import Contacto from "./views/Contacto";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Success from "./views/Success";
import Faq from "./views/Faq";
import PanelAire from "./views/PanelAire";
import Aviso from "./views/Aviso";
import PanelesSolares from "./views/PanelesSolares";
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="boton-whatsapp">
          <WhatsAppWidget
            className="whatsapp"
            message="Hola! 👋🏼,¿Qué podemos hacer por ti?"
            placeholder="Escribe un mensaje"
            companyName="Eco Globe"
            sendButton="Enviar"
            phoneNumber="+5216643642748"
            textReplyTime="Normalmente responde en una hora"
          />
        </div>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/servicios">
            <Servicios />
          </Route>
          <Route path="/nosotros">
            <Nosotros />
          </Route>

          <Route path="/contacto">
            <div className="cabecera">
              <h1 className="titulo-v">Contacto</h1>
              <h4>TE RESPONDEREMOS A LA BREVEDAD.</h4>
            </div>
          </Route>
          <Route path="/panel-mas-aire">
            <PanelAire />
          </Route>
          <Route path="/faq">
            <Faq />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Route path="/aviso">
            <Aviso />
          </Route>
          <Route path="/paneles-solares">
            <PanelesSolares />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Contacto />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
