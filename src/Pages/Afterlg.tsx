import Navbar from "../components/Navbar/Navbar"
import ChatInterface from "../components/home/Chat"
import FeatureSection from "../components/home/Feature"
import Footer from "../components/home/Footer/Footer"
import HeroSection from "../components/home/Hero"

import TestimonialSection from "../components/testo"



function Homev2() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <FeatureSection/>
    <ChatInterface/>
    <TestimonialSection/>
    <Footer/>

    </>
  )
}

export default Homev2