import React from 'react'
import './style.css'
import desktopImage from "./iluminacion_web.png"
import mobileImage from './iluminacion.png';
import Header from './../Header';
import Footer from './../Footer';
import Arrow from './../Arrow'

const Iluminacion = () => {
    const imageUrl = window.innerWidth >= 650 ? desktopImage : "";
    const imageAttr = { 
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        position: window.innerWidth >= 650 ? 'absolute': "",
        zIndex:1,
        width:'100%',
        height:'100%'
    }

    return (
        <div className="iluminacion" 
        style={imageAttr}>
            <Header />
            <Arrow linkToSection={'/contacto'}/>
            <div className="mobileImage">
                    <img src={mobileImage} alt="mobileImage" />
            </div>
            <div className="text">
                <div className="title">
                    Iluminación
                </div>
                <p>
                    Somos <u>especialistas</u> en <u>iluminación</u>, en todos
                    y cada uno de los diferentes ámbitos de la arquitectura, el <u>interiorismo</u> y <u>paisajismo</u>.
                    Ya desde nuestros comienzos como <u>interioristas</u> entendimos de la importancia de la <u>luz</u>, tanto de la iluminación de día como de la iluminación de noche y de la diferencia entre ambas.
                    También entendimos de su dificultad y de sus infinitas posibilidades. Por ello decidimos formarnos y especializarnos en el diseño de iluminación.
                </p>
                <p>
                    Hoy en día y dadas las infinitas posibilidades técnicas en cuantos a tipo y maneras de iluminar se hace más necesario que nunca
                    el contar con la ayuda y asesoramiento de especialistas en esta materia, pudiendo de este modo poder aportar la mejor solución a cada proyecto, y obtener como resultado espacios pensados, sanos y cuidados.
                    La luz nos ayudará a entender los espacios, a crear sensaciones y a potenciar nuestro <u>bienestar</u> físico y mental.</p>
            </div>
          <Footer />
        </div>
    )
}

export default Iluminacion