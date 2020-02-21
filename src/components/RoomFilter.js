import React, { useContext } from 'react'
import { RoomConsumer } from '../context'

export default function RoomFilter({rooms}) {
    
    let context = useContext(RoomConsumer);
    
    const {
        handleChange,
        type,
        capacity,
        minPrice,
        maxPrice,
        pets,
        breakfast,
        minSize,
        maxSize,
        price
    } = context; 

    // Getting uniqe types
    // let types = [...new Set(rooms.map(room => room.type ))]
    let types = ['all', ...new Set(rooms.map(room => room['type']))]
    types = types.map((item, index) => <option key={index} value={item}>{item}</option>)

    let capacities = [...new Set(rooms.map(item => item.capacity))]
    capacities = capacities.map((item, index) => <option key={index} value={item}>{item}</option>)

    return (
        <section className='filter-container'>
            <form className="filter-form">
                {/* select type */}
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select 
                        name="type" 
                        id="type" 
                        value={type} 
                        className="form-control" 
                        onChange={handleChange}>
                        
                        {types}

                    </select>
                </div>
                {/* end select type */}
                {/* Guests capacity */}
                <div className="form-group">
                    <label htmlFor="type">Guests</label>
                    <select 
                        name="capacity" 
                        id="capacity" 
                        value={capacity} 
                        className="form-control" 
                        onChange={handleChange}>
                        
                        {capacities}

                    </select>
                </div>
                {/* end Guests capacity */}
                {/* Price filtering */}
                <div className="form-group">
                    <label htmlFor="points">Price: ${price}</label>
                    <input 
                        type="range" 
                        className='form-control'
                        id="price" 
                        name="price" 
                        value={price}
                        min={minPrice} 
                        max={maxPrice}
                        onChange={handleChange} />
                </div>
                {/* End Price filtering */}
                {/* size filtering */}
                <div className="form-group">
                    <label htmlFor="size">room size</label>
                    <input 
                        type='number'
                        className='size-input'
                        id='minSize'
                        name='minSize'
                        value={minSize}
                        onChange={handleChange} />
                    <input 
                        type='number'
                        className='size-input'
                        id='maxSize'
                        name='maxSize'
                        value={maxSize}
                        onChange={handleChange} />
                </div>
                {/* End size filtering */}
                {/* checkbox filtering */}
                <div className="form-group">
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="breakfast" 
                            id="breakfast"
                            checked={breakfast}
                            onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input 
                            type="checkbox" 
                            name="pets" 
                            id="pets"
                            checked={pets}
                            onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>
                </div>
                {/* End checkbox filtering */}
            </form>
        </section>
    )
}
