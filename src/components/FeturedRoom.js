import React, { Component } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading';
import Title from './Title';
import Room from './Room';

export default class FeturedRoom extends Component {
    static contextType = RoomContext;
    
    render() {
        let {featuredRooms : rooms, loading} = this.context;
        rooms = rooms.map(room => <Room key={room.id} room={room} /> )
        
        return (
            <div className='featured-rooms'>
                <Title title='Featured rooms' />
                <div className='featured-rooms-center'>
                    {loading ? <Loading /> : rooms}
                </div>
            </div>
        )
    }
}
