import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/hero/HeroSection'
import StatsSection from './components/stats/StatsSection'
import SanctuarySection from './components/sancturies/SanctuarySection'
import MissionSection from './components/sancturies/MissionSection'
import ImpactStatistics from './components/sancturies/ImpactStatistics'
import CampaignsSection from './components/sancturies/CampaignsSection'
import WildlifeGallery from './components/sancturies/WildlifeGallery'
import UpcomingEvents from './components/sancturies/UpcomingEvents'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <StatsSection/>
      <SanctuarySection />
      <MissionSection/>
      <ImpactStatistics/>
      <CampaignsSection/>
      <WildlifeGallery/>
      <UpcomingEvents/>
      <Footer/>
    </div>
  )
}

export default App