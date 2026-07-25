import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/hero/HeroSection'
import StatsSection from '../components/stats/StatsSection'
import SanctuarySection from '../components/sancturies/SanctuarySection'
import MissionSection from '../components/sancturies/MissionSection'
import ImpactStatistics from '../components/sancturies/ImpactStatistics'
import WildlifeGallery from '../components/sancturies/WildlifeGallery'
import UpcomingEvents from '../components/sancturies/UpcomingEvents'
import NetZeroInitiative from '../components/sancturies/NetZeroInitiative'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <StatsSection/>
      <SanctuarySection />
      <MissionSection/>
      <ImpactStatistics/>
      <NetZeroInitiative/>
      <WildlifeGallery/>
      <UpcomingEvents/>
    </div>
  )
}

export default HomePage