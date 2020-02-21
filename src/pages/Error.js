import React from 'react'
import Hero from '../components/Hero'

export default function Error() {
  return (
    <React.Fragment>
      <Hero 
        title='404'
        subTitle='Page not found'
        link='/' 
        locationName='Return home' />
    </React.Fragment>
  )
}
