import React from 'react'
import './style.css'
import desktopImage from "./pagina_01_general.png"
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
                <p>
                    Desarrollamos proyectos de interiorismo sostenible para un <u>impacto positivo</u> en
                    las personas y el entorno. Construimos y rehabilitamos espacios bellos, confortables y saludables para convivir en armonía con el medio ambiente.
                </p>
                <p>
                En los <u>espacios, hogares, lugares de
                trabajo</u> que proyectamos, aunamos <u>tradición, sostenibilidad y vanguardia</u>. Una apuesta renovada por la <u>bioconstrucción</u> que recupera nuestra sabiduría tradicional y los valores artesanos, el uso de materiales orgánicos
                y naturales y la aplicación de las últimas tecnologías de construcción.
                </p>
                <p>Evitamos la presencia en los espacios habitados de elementos nocivos para nuestra salud y el medioambiente, en favor del uso y reutilización de materiales orgánicos tanto en el diseño de los espacios como en el diseño de su mobiliario.</p>
            </div>
          <Footer />
        </div>
    )
}

export default Home