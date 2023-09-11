import '../App/App.css';
import Home from '../../Pages/Home'
import { Routes, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/'/>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route to='/about' element={<About/>}/>
        <Route to='/projects' element={<Projects/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
