import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FileUpload from './FileUpload';

function Cotizador() {

  const [sent, setSent] = useState(false);

  const [name, setName] = useState("");




  const onImageSubmit = (e) => {

    e.preventDefault()
    setSent(true);

    const formData = new FormData()
    formData.append('name', name)





    const config = {
      headers: {
        'content-type': 'multipart/form-data',

      }

    }
    const URI = 'http://localhost:3001/cotizacion/paneles'
    axios.post(URI, formData, config, name).then(res => {

      alert(" Información recibida, nos comunicaremos con usted en breve,gracias por su preferencia")
      console.log(res)
      console.log(res.data)

    }).catch((err) => {
      console.error(
        "Error: ", err
      )
    })
  }



  return (
    <>
      {!sent ? (
        <form onSubmit={onImageSubmit} >
          <p className='titulo'>Cotiza tu proyecto</p>

          <div className="form-group m-2">
            <label>Nombre</label>
            <input type="text" className="form-control" name="nombre"
              value={name}
              onChange={(e) => setName(e.target.value)} />

          </div>

          <div className="form-group m-2">
            <label>Correo</label>
            <input type="email" className="form-control" name="correo" />
          </div>


          <div className="form-group m-2">
            <label>Sube una foto de tu recibo</label>
            <FileUpload />

          </div>

          <div className="form-group m-2">
            <label>Teléfono</label>
            <input type="text" className="form-control" name="telefono" />
          </div>

          <div className="form-grup m-2">
            <label>Mensaje</label>
            <textarea className="form-control" name="mensaje" rows="3" ></textarea >
          </div>

          <button className='btn btn-primario' type="submit">Subir</button>
        </form>
      ) : (
        <section>
          <div className="contenedor">
            <h2>Gracias por tu mensaje, nos comunicaremos lo más pronto posible</h2>
            <Link className="btn-primario" to="/">
              {" "}
              Regresar al inicio
            </Link>
          </div>
        </section>
      )}

    </>
  )
}

export default Cotizador