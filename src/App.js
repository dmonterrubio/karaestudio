import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Iluminacion from './components/Iluminacion'
import Contacto from './components/Contacto'

import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route  path="/iluminacion">
          <Iluminacion/>
        </Route>
        <Route  path="/contacto">
          <Contacto/>
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
