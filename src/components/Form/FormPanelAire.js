import React, { Component } from 'react';

import axios from 'axios';
import { withRouter } from 'react-router';

class FormPanelAire extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
      selectedFile: null,
      status: 'Enviar',
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ status: 'Enviando...' });
    axios({
      method: 'POST',
      //url: "https://staff.ecoglobe.mx/PanelMasAire",
      url: 'https://back.ecoglobe.mx/PanelMasAire',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'sent') {
        this.props.history.push('/success');
        console.log('Mensaje enviado');

        this.setState({ name: '', email: '', message: '', status: 'Enviado' });
      } else if (response.data.status === 'failed') {
        this.props.history.push('/Error');
        console.log('Error en el mensaje, porfavor intenta de nuevo');
      }
    });
  }

  handleChange(event) {
    const field = event.target.id;
    if (field === 'name-PanelMasAire') {
      this.setState({ name: event.target.value });
    } else if (field === 'email-PanelMasAire') {
      this.setState({ email: event.target.value });
    } else if (field === 'phone-PanelMasAire') {
      this.setState({ phone: event.target.value });
    } else if (field === 'message-PanelMasAire') {
      this.setState({ message: event.target.value });
    } else if (field === 'file-PanelMasAire') {
      this.setState({ file: event.target.value });
    }
  }

  render() {
    let buttonText = this.state.status;
    return (
      <div className='FormularioPanelAire'>
        <div className='titulo'>Deja tus datos y solicita una cotización:</div>
        <form
          className='formulario'
          onSubmit={this.handleSubmit.bind(this)}
          method='POST'>
          <div className='labelArea'>
            <label htmlFor='Nombre'> Nombre</label>
            <input
              placeholder='Nombre completo'
              type='text'
              id='name-PanelMasAire'
              value={this.state.name}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor='email'> Correo electrónico</label>
            <input
              placeholder='Correo electrónico'
              type='email'
              id='email-PanelMasAire'
              value={this.state.email}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor='file'>Foto de recibo:</label>
            <input
              id='file-PanelMasAir'
              type='file'
              name='file'
              accept='image/*'
              onChange={this.handleChange.bind(this)}
              multiple={false}
            />
          </div>
          <div>
            <label htmlFor='telefono'> Teléfono</label>
            <input
              placeholder='Teléfono'
              type='phone'
              id='phone-PanelMasAire'
              value={this.state.phone}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <div>
            <label htmlFor='Mensaje'>Mensaje:</label>
            <textarea
              placeholder='¿Cómo podemos ayudarte?'
              id='message-PanelMasAire'
              value={this.state.message}
              onChange={this.handleChange.bind(this)}
              required
            />
          </div>
          <small>
            Al enviar este formulario, se le agregará a nuestra lista de correo
            y doy por entendido que acepto las condiciones de uso del servicio y
            la política de privacidad
          </small>
          <button className='btn-secundario' type='submit'>
            {buttonText}
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(FormPanelAire);
