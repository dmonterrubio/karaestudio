import React from 'react'
import './style.css'
import {
  NavLink
} from "react-router-dom";

import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';

const Arrow = ({linkToSection}) => {

    return (
      <NavLink to={linkToSection} className="arrow">
        <ArrowRightAltRoundedIcon  style={{ fontSize: 60,color: '#000' }}/>
      </NavLink> 
    )
}

export default Arrow