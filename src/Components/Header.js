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
import { Image } from 'react-bootstrap';

import { HiOutlineUser } from "react-icons/hi";
import { Link } from 'react-router-dom';

import { FidgetSpinner } from 'react-loader-spinner'





const Header = () => {
    const { user, logOut, toggleMode, mode } = useContext(UniversalContext);

    const signOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }




    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                bg={mode === 'light' ? 'light' : 'dark'}
                variant={mode === 'light' ? 'light' : 'dark'}
                className={`text-${mode === 'light' ? 'dark' : 'light'}`}>
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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
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
                            <LinkContainer to="/">
                                <Nav.Link href="">
                                    <FidgetSpinner
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="dna-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="dna-wrapper"
                                        ballColors={['#ff0000', '#00ff00', '#0000ff']}
                                        backgroundColor="#F4442E"
                                    />

                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Form.Switch onClick={toggleMode} id="custom-switch" label="Dark Mode" />

                            <LinkContainer to="/login">
                                <Nav.Link href="">
                                    <Button variant="primary">Log In</Button>
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/">
                                <Nav.Link href="">
                                    {
                                        user ?
                                            <Image style={{ height: '30px', width: '30px' }} roundedCircle src={user?.photoURL} /> :
                                            <HiOutlineUser />
                                    }
                                </Nav.Link>
                            </LinkContainer>


                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="">  </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span className='me-2'>{user?.displayName}</span>
                                            <Button onClick={signOut} variant='secondary'> Sign Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'> Log In</Link>
                                            <Link to='/register'> Register </Link>
                                        </>

                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {user?.displayName}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;