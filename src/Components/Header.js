import React from 'react';
import { useContext } from 'react';

import { UniversalContext } from '../ContexSupplier/ContexSupplier';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';



const Header = () => {
    const {user, toggleMode, mode} = useContext(UniversalContext);
    

    

    return (
        <Navbar bg={mode === 'light' ? 'light' : 'dark'} variant={mode === 'light' ? 'light' : 'dark'} className={`text-${mode === 'light' ? 'dark' : 'light'}`} expand="lg">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="https://i.ibb.co/vBg5s0M/Microsites-bro.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link href="">Courses</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/">
                            <Nav.Link href="">Blog</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/">
                            <Nav.Link href="">FAQ</Nav.Link>
                        </LinkContainer>

                        <Form.Switch onClick={toggleMode} id="custom-switch" label="Dark Mode" />

                        <LinkContainer to="/">
                            <Nav.Link href="">
                                <Button variant="primary">Log In</Button>
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/">
                            <Nav.Link href="">
                                <img
                                    alt=""
                                    src="https://i.ibb.co/vBg5s0M/Microsites-bro.png"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top"
                                />
                            </Nav.Link>
                        </LinkContainer>

                        
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">                            
                            <NavDropdown.Item href="">{user.displayName}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;