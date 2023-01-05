import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Contacto } from '../contacto'

function BComponent({contacto}) {

    const [conect, setConect] = useState(contacto.conectado)

     const CambiaEstado = () => {
        setConect (!conect)
    }

  return (
    <div>
        <h3>B Component</h3>

        <h4>{conect ? 'Contacto en linea' : 'Contacto no disponible'}</h4>
      
        <button onClick={CambiaEstado} >
            Cambia estado
        </button>

    </div>
  )
}

BComponent.propTypes = {
contacto: PropTypes.instanceOf(Contacto)
}

export default BComponent
