import React, { useRef } from 'react'
import { Contacto } from '../contacto';
import propTypes from 'prop-types';

const ContactoForm = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    function addContacto(e) {
        e.preventDefault();
        const newContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            true            
        )
        add(newContacto);
    }
  return (
    <div>ContactoForm
        <form onSubmit={addContacto}>
            <div>
                <input placeholder='Nombre' ref={nombreRef} type='text'></input>
                <input placeholder='Apellido' ref={apellidoRef} type='text'></input>
                <input placeholder='Email' ref={emailRef} type='text'></input>
                <button type='submit'>Submit</button>
            </div>

        </form>


    </div>
  )
}

ContactoForm.propTypes = {
    add: propTypes.func.isRequired,
}


export default ContactoForm;