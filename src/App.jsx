import React , { useState } from 'react'
import TopBar from './components/topbar/TopBar';
import Intro from './components/intro/Intro';
import Portfolio from './components/protfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Menu from './components/manu/Menu';
import "./app.scss";

function App() {
  const [menuOpen , setMenuOpen] = useState(false);

  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  )
}

export default App
  