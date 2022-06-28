import './App.css';
import NavBar from './Components/Navbar';
import Home from './Pages/Home';
import Detalle from './Pages/Detalle';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detalle" element={<Detalle/>}/>
        </Routes>
      </Router>

      <Footer/>
    </div>
  );
}

export default App;
