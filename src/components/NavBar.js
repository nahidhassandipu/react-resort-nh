import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../logo.svg';
import { FaAlignRight } from "react-icons/fa";

export default class NavBar extends Component {
    state = {
        isOpen: false
    }
    navToggleHandle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <NavLink exact to='/'>
                            <img className='logo' src={logo} alt="Hotel logo"/>
                        </NavLink>
                        <button 
                            className="nav-btn" 
                            type="button"
                            onClick={this.navToggleHandle}>
                            <FaAlignRight className='nav-icon' />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                        <li>
                            <NavLink exact to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to='/rooms'>Rooms</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
