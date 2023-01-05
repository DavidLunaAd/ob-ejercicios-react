import React from 'react'
import { Contacto } from './contacto'
import BComponent from './bcomponent';

function AComponent(props) {
    const contacto1 = new Contacto ('Jaun', 'Lugif', 'jaudn@hty.com', true);

  return (
    <div>
        <h2>AComponent</h2>
        {contacto1.nombre}{' '}
        {contacto1.apellido}{' '}
        {contacto1.email}

        <BComponent contacto={contacto1}/>
    </div>
  )
}

export default AComponent
