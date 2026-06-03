import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Hero from './components/Hero';
import Services from './components/service.jsx'
import OurServices from './components/OurService.jsx';
import Featured from './components/Fetured.jsx';
import Banner from './components/Banner.jsx'
import Footer from './components/Footer.jsx';
export default function App() {
    return(
        <div>
            <Navbar />
            <Hero />
            <Services />
            <OurServices />
            <Featured />
            <Banner/>
            <Footer/>
        </div>
    )
}

