import React from 'react'
import HeaderSection from '../components/HeaderSection'
import FeaturesSection from '../components/FeaturesSection'
import ExtensionSection from '../components/ExtensionSection'
import CustomizeSection from '../components/CustomizeSection'
import PricingPlans from '../components/PricingPlans'
import HeroSection from '../components/HeroSection'
import DataSection from '../components/DataSection'
import AppsIntegrationSection from '../components/AppsIntegrationSection'
import TestimonialsSection from '../components/testimonialsSection'
import FooterSection from '../components/FooterSection'


const Home = () => {
  return (
    <div>
      <HeaderSection/>
      <FeaturesSection/>
      <ExtensionSection/>
      <CustomizeSection/>
      <PricingPlans/>
      <HeroSection/>
      <DataSection/>
      <AppsIntegrationSection/>
      <TestimonialsSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
