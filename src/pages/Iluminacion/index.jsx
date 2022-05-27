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
                    Somos especialistas en el diseño de <u>proyectos</u> de <u>iluminación</u>. Ya desde nuestros
                    comienzos como interioristas entendimos que una propuesta de iluminación adecuada
                    incide notablemente en el resultado final.
                </p>
                <p className="desktop-text">
                    Hay muchos factores que se han de tener en
                    cuenta para iluminar correctamente y nuestra amplia experiencia nos permite hacer
                    todo tipo de proyectos de iluminación desde el mas <u>artístico</u> y conceptual, hasta el más <u>técnico</u> y complejo, pasando por grandes y pequeños proyectos de retail, vivienda
                    privada, hoteles, restauración y sin olvidarnos de la iluminación de espacios exteriores.
                </p>
                <p className="desktop-text">
                    <u>La luz nos</u> ayudará a percibir los espacios, a crear sensaciones y a potenciar nuestro <u>bienestar físico y mental</u>.
                </p>
                <p className="mobile-text">
                    Somos especialistas en el diseño de <u>proyectos</u> de <u>iluminación</u>. Hay muchos factores que
                    se han de tener en cuenta para iluminar correctamente y nuestra amplia experiencia nos
                    permite hacer todo tipo de proyectos de iluminación desde el mas <u>artístico</u> y conceptual,
                    hasta el más <u>técnico</u> y complejo, pasando por grandes y pequeños proyectos de retail,
                    vivienda privada, hoteles, restauración y sin olvidarnos de la iluminación de espacios
                    exteriores.
                </p>
                <p className="mobile-text">
                    <u>La luz</u> nos ayudará a percibir los espacios, a crear sensaciones y a potenciar
                    nuestro <u>bienestar físico y mental</u>.
                </p>
               
            </div>
          <Footer />
        </div>
    )
}

export default Iluminacion