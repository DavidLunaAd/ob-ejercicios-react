import React, { useState } from 'react'
import { Contacto } from '../contacto';
import PropTypes from 'prop-types';

const ContactoComponent = ({contacto, eliminar}) => {

    const [conect, setConect] = useState(contacto.conectado)

    const CambiaEstado = () => {
        setConect (!conect)
    }

  return (
   <tr>
        <td>
            <span>{contacto.nombre}</span>
        </td>
        <td>
            <span>{contacto.apellido}</span>
        </td>
        <td>
            <span>{contacto.email}</span>
        </td><td>
            <span>{conect ? 'Conectado ' : 'Desconectado ' } 
            </span>
        </td>
        <td><button onClick={CambiaEstado} >
            Cambia estado
        </button></td>
        <td>
            <span> 
            <button onClick={() => eliminar(contacto)} >
            Borrar
        </button></span>
        </td>
   </tr>
  )
}

ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto).isRequired,
    eliminar: PropTypes.func.isRequired
};

export default ContactoComponent;