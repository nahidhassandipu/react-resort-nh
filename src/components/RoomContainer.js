import React from 'react'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'
import { withRoomConsumer } from "../context";
import Loading from './Loading';
import Title from './Title'

function RoomContainer({context}) {

  const {loading, sortedRooms, rooms} = context;

  // let roomsSetup = sortedRooms;
  // roomsSetup = roomsSetup.map(room => <RoomList key={room.id} sortedRooms={room} /> )
  
  // let {featuredRooms : rooms, loading} = this.context;
  
  // let roomsSetup = sortedRooms;
  // roomsSetup = roomsSetup.map(room => <Room key={room.id} room={room} /> )

  if (loading) return <Loading />
  
  return (
    
    
    <div className='featured-rooms'>
        <Title title='Our rooms' />
        <RoomFilter rooms={rooms} />
        <div className='featured-rooms-center'>
            {loading ? <Loading /> : <RoomList sortedRooms={sortedRooms} />}
        </div>
    </div>
  ) 
}

export default withRoomConsumer(RoomContainer)
