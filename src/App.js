import { useEffect, useState } from 'react';
import './App.css';
import About from './components/about/About';
import Navbar from './components/navbar/Navbar';
import Principal from './components/principal/Principal';


function App() {

  const [scroll, setScroll] = useState(0);

  const handleScroll =()=>{
    const position = window.scrollY;
    setScroll(position);
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  },[scroll])

console.log(scroll)
  return (
    <div className="App">
      <Navbar isScrolling={ scroll } />
      <Principal />
      <About/>
    </div>
  );
}

export default App;
