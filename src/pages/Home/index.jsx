import React from 'react'
import './style.css'
import desktopImage from "./montañas_web.png"
import mobileImage from './montañas.png';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Arrow from '../../components/Arrow'


const Home = () => {

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
        <div className="home" 
        style={imageAttr}>
            <Header />   
            <Arrow linkToSection={'/iluminacion'}/>
            <div className="mobileImage">
                    <img src={mobileImage} alt="mobileImage" />
            </div>
            <div className="text">
                <div className="title">
                    Interiorismo
                </div>
                <p className="desktop-text">
                    Desarrollamos <u>proyectos</u> de interiorismo <u>sostenible</u> para un impacto <u>positivo</u> tanto en las personas como en nuestro entorno. 
                    En los espacios que proyectamos, aunamos <u>tradición</u>, <u>sostenibilidad</u> y <u>vanguardia</u> además de una apuesta renovada por la <u>bioconstrucción</u>.
                    Esto nos permite recuperar los valores artesanales y el uso de materiales <u>orgánicos</u> y <u>naturales</u>. Todo ello teniendo muy en cuenta los avances <u>tecnológicos</u> en el sector de la construcción. 
                    Entendemos los <u>interiores</u> como espacios <u>vivos</u> que van cambiando según sus necesidades, entorno y ubicación.
                    Pensamos en la estacionalidad y en como el paso del día a la noche hace que los espacios cambien y se transformen. Esta manera de entender y fluir con la arquitectura
                    nos lleva a tener un gran respeto por las necesidades básicas de los espacios a diseñar.
                    Buscamos el equilibrio entre <u>funcionalidad</u>, confort y belleza, diseñando espacios sanos
                    y que faciliten el bien estar de las personas.
                </p>
                <p className="mobile-text">
                    Desarrollamos <u>proyectos</u> de interiorismo <u>sostenible</u> para un impacto <u>positivo</u> positivo tanto en
                    las personas como en nuestro entorno. En los espacios que proyectamos,
                    aunamos <u>tradición</u>, <u>sostenibilidad</u> y <u>vanguardia</u>, además de una apuesta renovada por
                    la <u>bioconstrucción</u>. Entendemos los interiores como espacios vivos que van cambiando
                    según sus necesidades, entorno y ubicación. Esta manera de entender y fluir con la
                    arquitectura nos lleva a tener un gran <u>respeto</u> por las necesidades básicas de los
                    espacios a diseñar. Buscamos el equilibrio entre funcionalidad, confort y belleza
                    diseñando espacios sanos que faciliten el bien estar de las personas. 
                </p>
            </div>
          <Footer />
        </div>
    )
}

export default Home