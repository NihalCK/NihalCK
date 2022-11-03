import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from '../components/HeroImage2';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="Let's talk." text="Let's have a chat"/>
      <Footer />
    </div>
  )
}

export default Contact