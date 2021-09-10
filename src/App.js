import React, { useEffect } from 'react'
import { Route, useLocation } from "wouter";
import Home from './pages/Home'
import Iluminacion from './pages/Iluminacion'
import Contacto from './pages/Contacto'

import './App.css'

function App() {
  const [location, setLocation] = useLocation();

  useEffect(() => {
      const changeLocation = (currentPath, nextPath) => {
        if (location === currentPath) setLocation(nextPath)  
      }
      const timer = setInterval(() => {
        changeLocation('/','/iluminacion')
        changeLocation('/iluminacion','/contacto')
        changeLocation('/contacto','/')  
      }, 12000);
      return () => clearInterval(timer)
  }, [location, setLocation])

  return (
      <div className="app">
        <Route 
          component={Home}
          path="/">
        </Route>
        <Route  
          path="/iluminacion"
          component={Iluminacion}>
        </Route>
        <Route  
          path="/contacto"
          component={Contacto}>
        </Route>

      </div>
  );
}

export default App;
