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
                    Somos <u>especialistas</u> en <u>Iluminación</u> arquitectónica tanto de <u>interiores</u> _espacios comerciales, vivienda, hoteles, restaurantes, espacios de bienestar, museos, arte efímero como de <u>exteriores</u> _ jardines, patios, monumentos, espacios públicos...
                </p>
                <p>
                    Desde nuestros comienzos como Interioristas entendimos la importancia de plantear <u>soluciones lumínicas</u> concretas para los diferentes espacios dependiendo de sus usos y necesidades.
                </p>
                <p>
                    Una propuesta de iluminación <u>adecuada</u> al espacio incide notablemente en el resultado final.
                </p>
                <p>
                    <u>La luz</u> nos ayudará a percibir los espacios, a crear sensaciones y a potenciar nuestro <u>bienestar físico y mental</u>.
                </p>
            </div>
          <Footer />
        </div>
    )
}

export default Iluminacion