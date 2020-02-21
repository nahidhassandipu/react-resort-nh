import React, { Component } from 'react'
import Client from './Contentful';
// import items from "./data";


const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 0,
        minPrice: 0,
        maxPrice: 0,
        pets: false,
        breakfast: false,
        minSize: 0,
        maxSize: 0,
        price: 0
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type: 'resortExample',
                order: 'fields.price'
            });
            let rooms = this.formateData(response.items);
            let featuredRooms = rooms.filter(room => room.featured === true);

            let maxPrice = Math.max(...rooms.map(room => room.price));
            let minPrice = Math.min(...rooms.map(room => room.price));
            let maxSize = Math.max(...rooms.map(room => room.size));

            this.setState({
                rooms,
                sortedRooms: rooms,
                featuredRooms,
                loading: false,
                price: maxPrice,
                minPrice,
                maxPrice,
                maxSize,
            });
        } catch(error) {
            console.error(error);
        }
    }

    componentDidMount() {
        this.getData()
    }
    
    formateData(rooms) {
        let tempRooms = rooms.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(item => item.fields.file.url);
            let room = {...item.fields, images, id}
            return room
        })
        return tempRooms;
    }
    
    getSignleRoom = slug => {
        let tempRooms = [...this.state.rooms];
        const matchedSlug = tempRooms.find(item => item.slug === slug)
        return matchedSlug;
    }

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        }, this.filterRooms)
    }
    
    filterRooms = () => {
        let {rooms, type, capacity, breakfast, pets, minSize, maxSize, price} = this.state;
        let tempRooms = [...rooms]

        capacity = parseInt(capacity)
        price = parseInt(price)
        tempRooms = tempRooms.filter(item => item.price <= price)
        tempRooms = tempRooms.filter(item => item.size >= minSize && item.size <= maxSize)
        
        if (type !== 'all') { tempRooms = tempRooms.filter(item => item.type === type) }
        if (capacity !== 1) { tempRooms = tempRooms.filter(item => item.capacity >= capacity) }
        if (breakfast) { tempRooms = tempRooms.filter(item => item.breakfast === true) }
        if (pets) { tempRooms = tempRooms.filter(item => item.pets === true) }

        this.setState({
            sortedRooms: tempRooms,
        })
    }

    render() {
        return (
            <RoomContext.Provider value={{ 
                ...this.state,
                getSignleRoom: this.getSignleRoom,
                handleChange: this.handleChange
            }} >
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
    return function ConsumerWraper(props) {
        return  <RoomConsumer>
                    {value => <Component {...props} context={value}/>}
                </RoomConsumer>
    }
}

export {RoomProvider, RoomConsumer, RoomContext};

// Contentful API - resortExample 