import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendPanelMasAire } from '../../services/panelMasAireService';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const FormPanelAire = () => {
  const history = useHistory();
  const [formValues, setFormValues] = useState(initialFormState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusLabel, setStatusLabel] = useState('Enviar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { id, value, files } = event.target;
    if (id === 'file-PanelMasAire') {
      const file = files && files[0] ? files[0] : null;
      setSelectedFile(file);
      return;
    }
    setFormValues((previousValues) => ({
      ...previousValues,
      [id.replace('-PanelMasAire', '')]: value,
    }));
  };

  const buildFormData = () => {
    const formData = new FormData();
    formData.append('name', formValues.name);
    formData.append('email', formValues.email);
    formData.append('phone', formValues.phone);
    formData.append('message', formValues.message);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    return formData;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    setStatusLabel('Enviando...');
    setErrorMessage('');

    try {
      const payload = buildFormData();
      const response = await sendPanelMasAire(payload);
      if (response.status === 'sent') {
        setFormValues(initialFormState);
        setSelectedFile(null);
        setStatusLabel('Enviado');
        history.push('/success');
        return;
      }
      setStatusLabel('Enviar');
      setErrorMessage(
        'No pudimos enviar tu mensaje. Por favor, intenta de nuevo.',
      );
      history.push('/Error');
    } catch (error) {
      setStatusLabel('Enviar');
      setErrorMessage(
        'Ocurrió un problema al enviar tu mensaje. Revisa tu conexión e inténtalo nuevamente.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='FormularioPanelAire'>
      <div className='titulo'>Deja tus datos y solicita una cotización:</div>
      <form className='formulario' onSubmit={handleSubmit} method='POST'>
        <div className='labelArea'>
          <label htmlFor='name-PanelMasAire'> Nombre</label>
          <input
            placeholder='Nombre completo'
            type='text'
            id='name-PanelMasAire'
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email-PanelMasAire'> Correo electrónico</label>
          <input
            placeholder='Correo electrónico'
            type='email'
            id='email-PanelMasAire'
            value={formValues.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errorMessage)}
          />
        </div>
        <div>
          <label htmlFor='file-PanelMasAire'>Foto de recibo:</label>
          <input
            id='file-PanelMasAire'
            type='file'
            name='file'
            accept='image/*'
            onChange={handleChange}
            multiple={false}
          />
        </div>
        <div>
          <label htmlFor='phone-PanelMasAire'> Teléfono</label>
          <input
            placeholder='Teléfono'
            type='tel'
            id='phone-PanelMasAire'
            value={formValues.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='message-PanelMasAire'>Mensaje:</label>
          <textarea
            placeholder='¿Cómo podemos ayudarte?'
            id='message-PanelMasAire'
            value={formValues.message}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errorMessage)}
          />
        </div>
        <small>
          Al enviar este formulario, se le agregará a nuestra lista de correo y
          doy por entendido que acepto las condiciones de uso del servicio y la
          política de privacidad
        </small>
        {errorMessage && (
          <div className='form-error' aria-live='assertive'>
            {errorMessage}
          </div>
        )}
        <button className='btn-secundario' type='submit' disabled={isSubmitting}>
          {statusLabel}
        </button>
      </form>
    </div>
  );
};

export default FormPanelAire;

