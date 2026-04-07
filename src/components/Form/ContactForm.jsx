import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendContact } from '../../services/contactService';

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ContactForm = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState(initialFormState);
  const [statusLabel, setStatusLabel] = useState('Enviar');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormValues((previousValues) => ({
      ...previousValues,
      [id]: value,
    }));
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
      const response = await sendContact(formValues);
      if (response.status === 'sent') {
        setFormValues(initialFormState);
        setStatusLabel('Enviado');
        navigate('/success');
        return;
      }
      setStatusLabel('Enviar');
      setErrorMessage(
        'No pudimos enviar tu mensaje. Por favor, intenta de nuevo.',
      );
      navigate('/error');
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
    <div className='div'>
      <div className='titulo'>Déjanos un mensaje:</div>
      <form className='formulario' onSubmit={handleSubmit} method='POST'>
        <div className='labelArea'>
          <label htmlFor='name'> Nombre</label>
          <input
            placeholder='Nombre completo'
            type='text'
            id='name'
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='email'> Correo electrónico</label>
          <input
            placeholder='Correo electrónico'
            type='email'
            id='email'
            value={formValues.email}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errorMessage)}
          />
        </div>
        <div>
          <label htmlFor='phone'> Teléfono</label>
          <input
            placeholder='Teléfono'
            type='tel'
            id='phone'
            value={formValues.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='message'>Mensaje:</label>
          <textarea
            placeholder='¿Cómo podemos ayudarte?'
            id='message'
            value={formValues.message}
            onChange={handleChange}
            required
            aria-invalid={Boolean(errorMessage)}
          />
        </div>
        <small>
          Al enviar este formulario acepto ser parte de la lista de correos de
          Eco Globe, las condiciones de uso del servicio y la política de
          privacidad.
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

export default ContactForm;

