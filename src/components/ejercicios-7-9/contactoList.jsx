import React, { useEffect, useState } from 'react'
import { Contacto } from '../contacto';
import ContactoComponent from './contactoComponent';
import ContactoForm from './contactoForm';

const ContactoList = () => {

    const defaultcontacto = new Contacto('David', ' Luna', 'dav@ufect.com', false);
    const defaultcontacto1 = new Contacto('Dianna', 'Spancer', 'dfe@ut.com', true);

    const [contactos, setContactos] = useState([defaultcontacto, defaultcontacto1]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },2000);
        return () => {
            console.log('Component is going to unmount')
        };
    }, [contactos]);

    function addContacto(contacto){
        console.log('Add this', contacto);
        const index = contactos.indexOf(contacto);
        const tempContactos = [...contactos];
        tempContactos.push(contacto);
        setContactos(tempContactos);

    }

    const borrar = (contacto) =>{
        console.log("eliminar: ", contacto);
        const index = contactos.indexOf(contacto);
        const tempTasks = [...contactos];
        tempTasks.splice(index, 1);
        setContactos(tempTasks);
    }

    const Table = () => {
        return(
            <table>
                <thead>
                <tr>
                    <th >Nombre</th>
                    <th >Apellido</th>
                    <th >Email</th>
                    <th >Estado</th>
                    <th >Accion</th>
                    <th >Borrar</th>
                </tr>
                </thead>
                <tbody>
                {contactos.map((contacto, index) => {
                    return(
                        <ContactoComponent key ={index} 
                            contacto={ contacto }
                            eliminar={borrar}>
                        </ContactoComponent>
                    )
                })}                                
                </tbody>
            </table>
        )
    }

    let contactoTable

    if (contactos.length > 0){
        contactoTable = <Table></Table>
    }else{
        contactoTable = (
        <div>
            <h3>No hay tareas que mostrar</h3>
            <h4>Puedes crear nuevas tareas </h4>
        </div>)
    }

  return (
    <div>
        <h2>ContactoList</h2>
        <div >
                <div >
                    <div >
                        <h5>Lista de contactos:</h5>
                    </div>
                    <div >
                    {loading ? <p>Cargando contactos...</p> : contactoTable}
                    </div>
                </div>                
            </div>        
            <ContactoForm add={addContacto}></ContactoForm>

    </div>
  )
}

export default ContactoList;