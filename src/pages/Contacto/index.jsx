import React from 'react'
import './style.css'
import contactoImage from "./retrato_1.jpeg"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Arrow from '../../components/Arrow'

const Contacto = () => {

    return (
        <div className="contacto" >
            <Header />  
            <Arrow linkToSection={'/'}/>
            <div className="mobileImage">
                    <img src={contactoImage} alt="mobileImage" />
            </div>
            <div className="text">
                <div className="title">
                    Contacto
                </div>
                <div className="datos">
                    <p><a href="mailto:info@karaestudio.com">info@karaestudio.com</a> </p>
                    <p className="contacto_ara">Ara <a href="tel:+34660589422">+34 620 978 762</a></p>
                    <p className="contacto_andrea">Andrea <a href="tel:+34660589422">+34 616 353 949</a></p>
                    <p><a href="https://www.instagram.com/kara.estudio/">Instagram</a></p>
                    {/* <p><a href="linkedin.com">Linkedin</a></p> */}
                </div>
            </div>
            <div className="media">
                    <img src={contactoImage} alt="contacto_img" />
            </div>
          <Footer />
        </div>
    )
}

export default Contacto