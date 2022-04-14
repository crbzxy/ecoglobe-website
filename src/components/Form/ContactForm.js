import React, { Component } from "react";

import axios from "axios";
import { withRouter } from "react-router";

class ContactForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      status: "Enviar",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: "Enviando..." });
    axios({
      method: "POST",
      url: "https://staff.ecoglobe.mx/contact",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "sent") {
        this.props.history.push("/success");
        console.log("Mensaje enviado");

        this.setState({ name: "", email: "", message: "", status: "Enviado" });
      } else if (response.data.status === "failed") {
        this.props.history.push("/Error");
        console.log("Error en el mensaje, porfavor intenta de nuevo");
      }
    });
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === "name") {
      this.setState({ name: event.target.value });
    } else if (field === "email") {
      this.setState({ email: event.target.value });
    } else if (field === "phone") {
      this.setState({ phone: event.target.value });
    } else if (field === "message") {
      this.setState({ message: event.target.value });
    }
  }
  render() {
    let buttonText = this.state.status;
    return (
      <div className="div">
        <div className="titulo">Déjanos un mensaje:</div>
        <form
          className="formulario"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="labelArea">
            <label htmlFor="Nombre"> Nombre</label>
            <input
              placeholder="Nombre completo"
              type="text"
              id="name"
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor="email"> Correo electrónico</label>
            <input
              placeholder="Correo electrónico"
              type="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor="telefono"> Teléfono</label>
            <input
              placeholder="Teléfono"
              type="phone"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor="Mensaje">Mensaje:</label>
            <textarea
              placeholder="¿Cómo podemos ayudarte?"
              id="message"
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <small>
            Al enviar este formulario acepto ser parte de la lista de correos de Eco Globe, las condiciones de uso del servicio y la política de privacidad.
          </small>
          <button className="btn-secundario" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(ContactForm);
