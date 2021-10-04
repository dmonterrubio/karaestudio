import React from 'react'
import './style.css'
import desktopImage from "./montañas_web.png"
import mobileImage from './montañas.png';
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Arrow from '../../components/Arrow'
import { useLocation } from 'wouter';
import { motion, AnimatePresence } from "framer-motion";

const AnimationSettings = {
    transition: { duration: 0.5 },
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

const Home = (props) => {
    const [location, setLocation] = useLocation();


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
        <AnimatePresence>
            {location === props.path && (
                <motion.div className="home" key="1" {...AnimationSettings} style={imageAttr}>
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
                            Desarrollamos <u>proyectos</u> de interiorismo
                            <u>sostenible</u> para un impacto <u>positivo</u> en
                            las personas y el entorno. Construimos y
                            rehabilitamos espacios <u>bellos</u>, confortables
                            y <u>saludables</u> para convivir en armonía con el
                            medio ambiente. En los espacios comerciales,
                            hogares y lugares de trabajo que proyectamos,
                            aunamos <u>tradición</u>, <u>sostenibilidad</u> y <u>vanguardia</u>.
                            Una apuesta renovada por la <u>bioconstrucción</u>
                            que recupera nuestra sabiduría tradicional,
                            los valores artesanales y el uso de materiales
                            <u>orgánicos</u> y naturales. Todo ello sin olvidarnos
                            y teniendo muy en cuenta los avances
                            <u>tecnológicos</u> en el sector de la construcción.
                            En nuestros proyectos evitamos la presencia
                            de elementos nocivos para la <u>salud</u> y el medio
                            ambiente. Apostamos por la <u>reutilización</u> de
                            materiales,tanto en el diseño de interiores
                            como en el diseño de mobiliario. 
                        </p>
                        <p className="mobile-text">
                            Desarrollamos <u>proyectos</u> de interiorismo <u>sostenible</u> para un impacto <u>positivo</u> en
                            las personas y el entorno. Construimos y rehabilitamos espacios <u>bellos</u>, confortables
                            y <u>saludables</u> para convivir en armonía con el medio ambiente. En los espacios comerciales, hogares y lugares de trabajo que proyectamos, aunamos <u>tradición</u>, <u>sostenibilidad</u> y <u>vanguardia</u>. Una apuesta renovada por la <u>bioconstrucción</u>
                            que recupera nuestra sabiduría tradicional,
                            los valores artesanales y el uso de materiales <u>orgánicos</u> y naturales. Todo ello sin olvidarnos y teniendo muy en cuenta los avances <u>tecnológicos</u> en el sector de la construcción.
                        </p>
                    </div>
                <Footer />
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Home