import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='container'>
            <div>
                <h3>Register</h3>
            </div>
            <div className='w-75 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Full name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;