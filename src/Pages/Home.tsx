import ChatInterface from "../components/home/Chat"
import FeatureSection from "../components/home/Feature"
import Footer from "../components/home/Footer/Footer"
import HeroSection from "../components/home/Hero"
import Navbar from "../components/home/Navbar/Navbar"
import TestimonialSection from "../components/testo"



function Home() {
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

export default Home