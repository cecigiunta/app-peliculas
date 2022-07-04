import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Routing from './Services/Routing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
