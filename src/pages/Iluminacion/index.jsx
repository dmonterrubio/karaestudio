import React from 'react'
import './style.css'
import desktopImage from "./iluminacion_web.png"
import mobileImage from './iluminacion.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Arrow from '../../components/Arrow'

const Iluminacion = () => {
    const imageUrl = window.innerWidth >= 1025 ? desktopImage : "";
    const imageAttr = { 
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        position: window.innerWidth >= 1025 ? 'absolute': "",
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
                <p className="desktop-text">
                    Somos <u>especialistas</u> en <u>Iluminación</u> arquitectónica tanto de <u>interiores</u> _espacios comerciales, vivienda, hoteles, restaurantes, espacios de bienestar, museos, arte efímero como de <u>exteriores</u> _ jardines, patios, monumentos, espacios públicos...
                </p>
                <p className="desktop-text">
                    Desde nuestros comienzos como Interioristas entendimos la importancia de plantear <u>soluciones lumínicas</u> concretas para los diferentes espacios dependiendo de sus usos y necesidades.
                </p>
                <p className="desktop-text">
                    Una propuesta de iluminación <u>adecuada</u> al espacio incide notablemente en el resultado final.
                </p>
                <p className="desktop-text">
                    <u>La luz</u> nos ayudará a percibir los espacios, a crear sensaciones y a potenciar nuestro <u>bienestar físico y mental</u>.
                </p>
                <p className="mobile-text">
                    Somos <u>especialistas</u> en <u>Iluminación</u> arquitectónica tanto de <u>interiores</u> _espacios comerciales, vivienda, hoteles, restaurantes, espacios de bienestar, museos, arte efímero como de <u>exteriores</u> _ jardines, patios, monumentos, espacios públicos...
                </p>
                <p className="mobile-text">
                    Una <u>propuesta</u> de iluminación <u>adecuada</u> al espacio, incide notablemente en el resultado final. La <u>luz</u> nos ayudará a percibir los <u>espacios</u>, a crear <u>sensaciones</u> y a potenciar nuestro <u>bienestar</u> físico y mental.
                </p>
            </div>
          <Footer />
        </div>
    )
}

export default Iluminacion