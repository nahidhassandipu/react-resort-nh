import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta.'
            },
            {
                icon: <FaHiking />,
                title: 'Endless hiking',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta.'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta.'
            },
            {
                icon: <FaBeer />,
                title: 'Strongest beer',
                info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, soluta.'
            }
        ]
    }
    render() {
        const content = this.state.services;
        return (
            <div className='services'>
                <Title title='Services' />
                <div className="services-center">
                    {content.map((item, index) => (
                        <article className='service' key={index}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.info}</p>
                        </article>
                    ))}
                </div>
            </div>
        )
    }
    
}
