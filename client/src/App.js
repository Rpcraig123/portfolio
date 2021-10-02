import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
      <Route path='/about' exact>
        <About />
      </Route>
      <Route path='/contact' exact>
        <Contact /> 
      </Route>
      <Route path='/' exact>
        <Introduction />
      </Route>
      <Route path='/projects' exact>
        <Projects />
      </Route>
    </Switch>
    </div>
  );
}

export default App;
