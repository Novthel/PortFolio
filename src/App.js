import { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Principal from './components/principal/Principal';
import ProyectGrid from './components/grid/ProyectGrid';


function App() {

  const [scroll, setScroll] = useState(0);

  const handleScroll =()=>{
    const position = window.scrollY;
    setScroll(position);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[scroll])

  return (
    <div className="App">
      <Navbar isScrolling={ scroll } />
      <Principal />
      <About/>
      <ProyectGrid/>
    </div>
  );
}

export default App;
