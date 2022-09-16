import React from 'react'
import './Navbar.css'
import { Link , Route , Routes } from 'react-router-dom'
import PredictAge from '../PredictAge'
import Weather from '../Weather'
import CatFact from '../CatFact'

const Navbar = () => {
  return (
    <>
    <nav class="navbar">
        
        <ul class="nav-item">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/weather">Weather</Link></li>
            <li><Link to="/cat-fact">CatFact</Link></li>
            <li><Link to="/predict-age">PredictAge</Link></li>
        </ul>
    </nav>
    <Routes>
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/cat-fact" element={<CatFact />}></Route>
        <Route path="/predict-age" element={<PredictAge />}></Route>
    </Routes>
    </>
  )
}

export default Navbar;