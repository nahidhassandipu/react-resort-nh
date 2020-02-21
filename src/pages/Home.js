import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import FeturedRoom from '../components/FeturedRoom'

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Services />
      <FeturedRoom />
    </React.Fragment>
  )
}
