import { Route } from "wouter";
import Home from './pages/Home'
import Iluminacion from './pages/Iluminacion'
import Contacto from './pages/Contacto'

import './App.css'

function App() {
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
