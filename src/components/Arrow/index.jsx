import React from 'react'
import './style.css'
import {Link} from "wouter";
import arrow from './flecha.png'

const Arrow = ({linkToSection}) => {

    return (
      <div className="arrow">
        <Link to={linkToSection} >
          <img src={arrow} alt="arrow" />
        </Link> 
      </div>
     
    )
}

export default Arrow