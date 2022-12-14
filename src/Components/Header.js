import React from 'react';
import { useContext } from 'react';

import { UniversalContext } from '../ContexSupplier/ContexSupplier';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { LinkContainer } from 'react-router-bootstrap';
import { Image } from 'react-bootstrap';

import { HiOutlineUser } from "react-icons/hi";
import { Link, Navigate } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';



const Header = () => {
    const { user, logOut, toggleMode, mode } = useContext(UniversalContext);

    const signOut = () => {
        <Navigate to='/'></Navigate>
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }




    return (
        <div>
            <ReactTooltip place="top" type="success" effect="float"/>


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
                            LanTabur Office Courses
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/courses">
                                <Nav.Link href="">Courses</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/blog">
                                <Nav.Link href="">Blog</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/">
                                <Nav.Link href="">FAQ</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <Form.Switch className='my-auto' onClick={toggleMode} id="custom-switch" label="Dark Mode" />

                            <LinkContainer to="/">
                                <Nav.Link className='my-auto' href="">
                                    {
                                        user ?
                                            <Image data-tip={user?.displayName} style={{ height: '30px', width: '30px' }} roundedCircle src={user?.photoURL} referrerPolicy='no-referrer' /> :
                                            <HiOutlineUser />
                                    }
                                </Nav.Link>
                            </LinkContainer>



                            <>
                                {
                                    user?.uid ?
                                        <>
                                            <span className='m-2'>{user?.displayName}</span>
                                            <Button onClick={signOut} variant='secondary'> Sign Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login'> <Button className='m-1'>Log In</Button></Link>
                                            <Link to='/register'> <Button className='m-1'> Register </Button> </Link>
                                        </>

                                }
                            </>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;