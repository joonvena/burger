import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Nav, Navbar, NavItem} from 'react-bootstrap';

class NavigationBar extends Component {
        
    render() {
        return (

            <Navbar fluid collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#home">BurgerLoversFinland</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                        Etusivu
                    </NavItem>
                    <NavItem eventKey={2} componentClass={Link} href="/" to="/lisaaravintola">
                        Lisää Ravintola
                    </NavItem>
                    <NavItem eventKey={3} componentClass={Link} href="/" to="/kirjaudu">
                        Kirjaudu
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        );
    }
    }

export default NavigationBar