import React from 'react';
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

import { Link } from 'react-router-dom';

const LogIn = () => {



    return (
        <div className='text-center mx-auto my-5'>
            <ButtonGroup vertical className='my-5'>
                <Button className='mb-3 mt-5'> <HiOutlineMail></HiOutlineMail> Sign in with e-mail & password</Button>
                <Button className='mb-3'> <FaGoogle></FaGoogle> sign in with Google </Button>
                <Button className='mb-3'> <FaGithub /> Sign in with gitHub </Button>
                <p> No account yet ? <Link to='/register'> Sign up</Link> </p>
            </ButtonGroup>
        </div>
    );
};

export default LogIn;