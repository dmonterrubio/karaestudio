import React from 'react'
import './style.css'
import logoUrl from './kara_logo.png';
import { Link } from 'wouter';


const Header = () => {

    return (
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img src={logoUrl} alt="logo" />
            </Link>
           
          </div>
         <div className="info">
            <p><a href="tel:+34660589422">(+34) 620 978 762</a></p>
            <p><a href="mailto:info@karaestudio.com">info@karaestudio.com</a> </p>
            <p className="emails">Kara Estudio somos <a href="mailto:aradarriba@karaestudio.com">Ara Darriba</a>  y <a href="mailto:andrealday@karaestudio.com">Andrea Alday</a></p>
         </div>
          
        </div>
    )
}

export default Header