import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type='text' placeholder='Your Full Name' {...register("Full name", { required: true })} />
                    <Form.Text className="text-muted">
                        Write your full name.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" {...register("email", { required: true })} />
                    <Form.Text className="text-muted">
                        Provide a valid e-mail address.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" placeholder='Your Photo URL' {...register("Photo URL")} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" {...register("password", { required: true, min: 6, max: 12 })} />
                    <Form.Text className="text-muted">
                        Use minimum one uppercase, lowercase & number.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept our terms and conditions." />
                </Form.Group>

                <Button variant="primary" type="submit" className="mb-3">
                    Register
                </Button>

                <Form.Group>
                    <Form.Text>
                        Already have an account? Please <Link to='/login'>Log in</Link>
                    </Form.Text>
                </Form.Group>
            </Form>



        </div>

    );
};

export default Register;