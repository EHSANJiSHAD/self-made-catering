import './Login.css'
import {  useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import auth from '../../../firebase.init';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
//USING REF///////////////////////////////////////////
        const emailRef = useRef('');
        const passwordRef = useRef('');

        const handleSubmitWithRef = event =>{
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            
            signInWithEmailAndPassword(email,password);
        }
 
//USING REF///////////////////////////////////////////

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    

    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [error1,setError1] = useState('');
    const navigate = useNavigate();

    // const handleEmailBlur = event =>{
    //     setEmail(event.target.value);
    // }

    // const handlePasswordBlur = event =>{
    //     setPassword(event.target.value);
    // }
    const handleNewSignUp = event =>{
        navigate('/signup');
    }

    // const handleUserLogIn = event=>{
    //     event.preventDefault();
    //     signInWithEmailAndPassword(email,password);
    // }
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

    if(user ){
        navigate(from,{replace: true});
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('please enter your email address');
        }
    }
    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleSubmitWithRef}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef}  type="email" placeholder="ENTER EMAIL" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="PASSWORD" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error?.message}</p>
                {
                    loading && <p className='nav-bar-bg'>LOADING...</p>
                }
                <Button className='mb-5' variant="btn" type="submit">
                    LOG IN
                </Button>
                
            </Form>
            <p>NEW TO SELF-MADE? <Link className='form-link' to='/signup' onClick={handleNewSignUp}>SIGN UP</Link> </p>
                <p>Forget Password? <button className='logout-btn  pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                
                <SocialLogin></SocialLogin>
                
                <ToastContainer/>
        </div>
    );
};

export default Login;