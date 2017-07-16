/**
 * Created by the, rogue Pixxel on 05/25/2017.
 */
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../scss/header.css';

class Header extends Component {
    render() {
        return (
            <div className="App-header">
                <div className="brand">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="App-links">
                    <ul>
                        <li className="active"><a href="#">Home</a></li>
                        <li><a href="#">Wallpaper</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Android</a></li>
                        <li><a href="#">Shopping</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Filmy Masala</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;
