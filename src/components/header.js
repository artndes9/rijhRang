/**
 * Created by the, rogue Pixxel on 05/25/2017.
 */
import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../scss/header.css';

class Header extends Component {
    render() {
        return (
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Rijh Rang</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer exact to="/" activeClassName="active" ><NavItem>Home</NavItem></LinkContainer >
                            <LinkContainer to="/privacy"><NavItem>Wallpaper</NavItem></LinkContainer >
                            <LinkContainer to="/music"><NavItem>Music</NavItem></LinkContainer >
                            <LinkContainer to="/videos"><NavItem >Videos</NavItem></LinkContainer >
                            {/*<LinkContainer ><NavItem to="/android">Android</NavItem></LinkContainer >*/}
                            {/*<LinkContainer ><NavItem to="/shopping">Shopping</NavItem></LinkContainer >*/}
                            {/*<LinkContainer ><NavItem to="/jobs">Jobs</NavItem></LinkContainer >*/}
                            {/*<LinkContainer ><NavItem to="/filmy">Filmy Masala</NavItem></LinkContainer >*/}
                            <LinkContainer to="/about"><NavItem>About</NavItem></LinkContainer >
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Header;
