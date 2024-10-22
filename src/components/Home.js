import React from 'react'
import Navbar from './Navbar'
import Banner from './Banner'
import Product from './Product'
import OurService from './OurService'
import HowItWorks from './HowItWorks'
import FreqAskQues from './FreqAskQues'
import Subscribe from './Subscribe'
import TradingChallengeSection from './TradingChallengeSection'
import TestimonialsSlider from './TestimonialsSlider'
const Home = () => {
  return (
    <div>
        <Banner/>
        <OurService/>
       
        <Product/>
      
        <HowItWorks/>
       
     
        
        <TestimonialsSlider/>
       
        <FreqAskQues/>
        <Subscribe/>
        
        <TradingChallengeSection/>
    </div>
  )
}

export default Home