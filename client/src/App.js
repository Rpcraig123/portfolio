import Topbar from './components/Topbar'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Menu from './components/Menu'
import AboutMe from './components/AboutMe'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Introduction/>
        <AboutMe/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
