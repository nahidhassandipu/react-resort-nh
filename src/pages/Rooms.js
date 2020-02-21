import React from 'react'
import Hero from '../components/Hero'
import RoomContainer from '../components/RoomContainer'

export default function Rooms() {
  return (
    <React.Fragment>

      <Hero 
        title='Your rooms' 
        subTitle=''
        image='roomsHero' 
        link='/' 
        locationName='Return home' />

        <RoomContainer />

    </React.Fragment>
  )
}
