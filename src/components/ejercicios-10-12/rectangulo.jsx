import React, { useEffect, useState } from 'react'

function Rectangulo() {

    const [touched, setTouched] = useState(negro)

    const negro = {
        width: '250px',     /* Ancho de 150 píxeles */
        height: '250px',          /* Alto de 150 píxeles */
        background: 'black',        /* Fondo de color rojo */
        border: '1px solid #000',
    };

    const white = {
        width: '250px',     /* Ancho de 150 píxeles */
        height: '250px',          /* Alto de 150 píxeles */
        background: 'white',        /* Fondo de color rojo */
        border: '1px solid #000',
    };

    function inside(e) {  
        setTouched(white)    
          let randomInt = getRandomInt(0,255);
        console.log(randomInt);
        e.target.style.background = '#' + randomInt;
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }    

    function leave(e) {
        e.target.style.background = 'blue'
    };

  return (
    <div><h3>Ejercicios 10 - 12 </h3>
        {/* <div className='rectangulo' 
        style={
            onMouseEnter={inside}
            onMouseLeave={leave}}
        >CLosas</div> */}

    </div>
  )
}

export default Rectangulo
