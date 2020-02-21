import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({title, image, link, locationName, subTitle}) {
  return (
    <div className={image}>
        <div className='banner'>
            <h1>{title}</h1>
            <div></div>
            <p>{subTitle}</p>
            <Link className='btn-hero' to={link} >{locationName}</Link>
        </div>
    </div>
  )
}

Hero.defaultProps = {
    title: 'Luxurious rooms',
    subTitle: 'Delux room starting at $990',
    image: 'defaultHero',
    link: '/rooms',
    locationName: 'View rooms'
}
