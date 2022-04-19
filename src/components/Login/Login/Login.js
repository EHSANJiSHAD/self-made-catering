import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error1,setError1] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleNewSignUp = event =>{
        navigate('/signup');
    }

    const handleUserLogIn = event=>{
        event.preventDefault();
        signInWithEmailAndPassword(email,password);
    }
    // if (error) {
    //     return (
    //       <div>
    //         <p>Error: {error.message}</p>
    //       </div>
    //     );
    //   }

    //   if (loading) {
    //     return <p>Loading...</p>;
    //   }

    

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if(user){
        navigate(from,{replace: true});
    }
    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleUserLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="ENTER EMAIL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="PASSWORD" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error?.message}</p>
                {
                    loading && <p className='nav-bar-bg'>LOADING...</p>
                }
                <Button className='mb-5' variant="btn" type="submit">
                    LOG IN
                </Button>
                <p>NEW TO SELF-MADE? <Link className='form-link' to='/signup' onClick={handleNewSignUp}>SIGN UP</Link> </p>
            </Form>
        </div>
    );
};

export default Login;