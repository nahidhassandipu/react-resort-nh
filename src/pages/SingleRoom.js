import React, { Component } from 'react'
import { RoomContext } from "../context";
import { Link } from 'react-router-dom';
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {

  constructor(props) {
    super(props)

    this.state = {
      slug : this.props.match.params.slug
    }

  }
  static contextType = RoomContext;  
  
  render() {

    const {getSignleRoom} = this.context;

    const room = getSignleRoom(this.state.slug)

    if (!room) {
      return (
        <div className='error'>
          <h3>Unable to find the room!</h3>
          <Link to='/rooms' className="btn-primary">
            Back to rooms
          </Link>
        </div>
      )  
    } else {

      const { 
        name, 
        price, 
        size, 
        capacity, 
        pets, 
        breakfast, 
        description,
        extras,
        images,
        } = room;

        const [mainThumbnail, ...restImg] = images;

      return (
        <>
          <StyledHero img={mainThumbnail}>
            <div className='banner' >{name}</div>
          </StyledHero> 
          <section className="single-room">
            <div className="single-room-images">
              {restImg.map((item, index) => <img src={item} key={index} alt={name}/> )}
            </div>
            
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>max capacity : {capacity > 1 ? `${capacity} peoples` : `${capacity} people`}</h6>
                <h6>{pets ? 'pets allowed' : 'no pets allowed'}</h6>
                <h6>{breakfast && 'free breakfast included'}</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>Extras</h6>
            <ul className="extras">
              {extras.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>
          </section>
        </>
      )
    }
  }
}
