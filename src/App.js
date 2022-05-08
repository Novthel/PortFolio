
import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Principal from './components/principal/Principal';
import ProyectGrid from './components/grid/ProyectGrid';
import Footer from './components/footer/Footer';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Principal />
      <About/>
      <ProyectGrid/>
      <Footer/>
    </div>
  );
}

export default App;
