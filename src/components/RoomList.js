import React from 'react'
import Room from './Room';

export default function RoomList({sortedRooms}) {

    if( sortedRooms.length < 1 ) {
        return <div className='empty-search'><h1>No rooms are matched! </h1></div>
    }
    
    return (
        <section className="roomslist">
            <div className="roomslist-center">
                {sortedRooms.map(room => <Room key={room.id} room={room} /> )}
            </div>
        </section>
    )

}
