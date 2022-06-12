import { useState } from 'react';
import axios from 'axios';
//import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const Cotiazdor = () => {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    ecount: '',
  });
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSent(true);
    try {
      const url =
        'https://ecoglobe-contact-server-production.up.railway.app/cotizacion';
      const { data: res } = await axios.post(url, data);
      setMsg(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.Cotiazdor_container}>
      {!sent && (
        <form className={styles.form_container} onSubmit={handleSubmit}>
          <h3 className='titulo'>Cotiza un proyecto</h3>
          <input
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleChange}
            value={data.name}
            required
            className={styles.input}
          />
          <input
            type='text'
            placeholder='Apellido'
            name='lastname'
            onChange={handleChange}
            value={data.lastname}
            required
            className={styles.input}
          />
          <input
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleChange}
            value={data.email}
            required
            className={styles.input}
          />
          <input
            type='phone'
            placeholder='teléfono'
            name='phone'
            onChange={handleChange}
            value={data.phone}
            required
            className={styles.input}
          />
          <select
            name='service'
            id='service'
            onChange={handleChange}
            value={data.service}
            required>
            <option value=''>Selecciona un servicio</option>
            <option value='PANELES SOLARES INTERCONECTADOS A LA RED DE CFE'>
              PANELES SOLARES INTERCONECTADOS A LA RED DE CFE
            </option>
            <option value='PANELES SOLARES AUTÓNOMOS'>
              PANELES SOLARES AUTÓNOMOS
            </option>
            <option value='SOLUCIONES EN ELECTRICIDAD'>
              SOLUCIONES EN ELECTRICIDAD
            </option>
            <option value='AIRE ACONDICIONADO'>AIRE ACONDICIONADO</option>
            <option value='AIRE ACONDICIONADO + PANEL'>
              AIRE ACONDICIONADO + PANEL
            </option>
          </select>

          <select
            name='ecount'
            id='ecount'
            onChange={handleChange}
            value={data.ecount}
            required>
            <option value=''>¿Cuánto pagas de luz? </option>
            <option value='$0 - $1,000'>$0 - $1,000</option>
            <option value='$1,000 - $2,000'>$1,000 - $2,000</option>
            <option value='$2,000 - $5,000'>$2,000 - $5,000</option>
            <option value='Más de $5,000'>Más de $5,000</option>
          </select>

          {error && <div className={styles.error_msg}>{error}</div>}
          {msg && <div className={styles.success_msg}>{msg}</div>}
          <button type='submit' className='btn-primario'>
            Cotizar
          </button>
        </form>
      )}
      {sent && (
        <div className={styles.success_msg}>
          <h3 className='titulo'>Cotización enviada</h3>
          <p>Gracias por tu preferencia, responderemos a la brevedad</p>
          {msg}
        </div>
      )}
    </div>
  );
};

export default Cotiazdor;
