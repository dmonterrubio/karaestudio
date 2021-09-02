import React from 'react'
import './style.css'
import {  Link} from "wouter";

import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

const Arrow = ({linkToSection}) => {

    return (
      <div className="arrow">
        <Link to={linkToSection} >
          <ArrowRightAltRoundedIcon  style={{ fontSize: 60,color: '#000' }}/>
        </Link> 
      </div>
     
    )
}

export default Arrow