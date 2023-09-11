import '../App/App.css';
import Home from '../../Pages/Home'
import About from '../../Pages/About'
import Projects from '../../Pages/Projects'
import Contact from '../../Pages/Contact'

import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className='home-button' to='/'>HV</NavLink>
        <NavLink className='about-button' to='/about'>About</NavLink>
        <NavLink className='projects-button' to='/projects'>Projects</NavLink>
        <NavLink className='contact-button' to='/contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
