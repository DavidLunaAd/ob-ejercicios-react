import React, { useEffect, useState } from 'react'

export default function ClockFuncional(props) {

    const estadoInicial= {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    };

    const [estado, setEstado] = useState(estadoInicial);

    useEffect(() => {
      const timerID = setInterval(() => {
        tick()
        console.log('Time Id')
      }, 1000);
    
      return () => {
       clearInterval(timerID);
      }
    }, );

     const tick = () =>{
        let edad = estado.edad +1
        setEstado(
          {
                fecha: new Date(),
                edad
          }
            )       
        }
  return (
    <div>
       <h2>
         Hora Actual:
         {estado.fecha.toLocaleTimeString()}
         </h2>
         <h3>{estado.nombre} {estado.apellidos}</h3>
         <h1>Edad: {estado.edad}</h1>

    </div>
  )
}
