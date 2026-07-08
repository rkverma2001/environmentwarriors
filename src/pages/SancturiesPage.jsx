import React from 'react'
import SanctuariesHero from '../components/sanctury/SanctuariesHero'
import SanctuariesOverview from '../components/sanctury/SanctuariesOverview'
import SanctuariesGrid from '../components/sanctury/SanctuariesGrid'

const SancturiesPage = () => {
  return (
    <div>
        <SanctuariesHero/>
        <SanctuariesOverview/>
        <SanctuariesGrid/>
    </div>
  )
}

export default SancturiesPage