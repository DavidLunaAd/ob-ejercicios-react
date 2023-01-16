import React, { useEffect, useState } from 'react'

function Rectangulo() {

    const [colorStyle, setColorStyle] = useState(false);

    let red = getRandomInt(0,255);
    let green = getRandomInt(0,255);
    let blue = getRandomInt(0,255);

    const multi = {
        width: '250px',     /* Ancho de 150 píxeles */
        height: '250px',          /* Alto de 150 píxeles */
        background: `rgb(${red},${green},${blue})`,        /* Fondo de color rojo */
        border: '1px solid #000',
    };

    const black = {
        width: '250px',     /* Ancho de 150 píxeles */
        height: '250px',          /* Alto de 150 píxeles */
        background: 'black',        /* Fondo de color rojo */
        border: '1px solid #000',
    };

    function enter() {
      setColorStyle(true);
    };

    useEffect(() => {
      //setInterval(leave, 1000);
      console.log("renderiza")
    }, [enter]);

    useEffect(() => {
      clearInterval(enter);
      console.log("renderiza")
    }, [leave])
    

    //Cuando se clicka dos veces
    function leave(){
      console.log("leave");
      setColorStyle(false)
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
      }    

  return (
    <div>
      <h3>Ejercicios 10 - 12 </h3>

        <div className='rectangulo' 
          style={colorStyle ? multi : black}
          onMouseEnter={enter}
          onMouseLeave={leave}
          >CLosas
        </div>
        <br/>
    </div>
  )
}

export default Rectangulo
