import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import DefaultImg from '../images/default-notfound-image.png'

export default function Room({ room }) {
    const { price, images, name, slug } = room;

    return (
        <article className="room">
            <div className="img-container">
                <div className="price-top">
                    <h6>${price}</h6>
                    <p>Per night</p>
                </div>
                <img src={images[0] || DefaultImg} alt={name} />
                <Link 
                    to={`/rooms/${slug}`} 
                    className='btn-primary room-link' >
                    Features
                </Link>
            </div>
            <p className='room-info'>{name}</p>
        </article>
    )
}


Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired
    })
}