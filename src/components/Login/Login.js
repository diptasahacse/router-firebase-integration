import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useFirebase from '../../hooks/useFirebase';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const Login = () => {
    // const {signInwithGoogleHandler} = useFirebase();

    const [signInWithGoogle, user,error] = useSignInWithGoogle(auth);
    
    return (
        <div className='container'>
            <div>
                <h3>Login</h3>
            </div>
            <div className='text-center'>
                <button onClick={()=>signInWithGoogle()} className='btn btn-danger'>Sign in with Google</button>
            </div>
            <div className='w-75 mx-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;