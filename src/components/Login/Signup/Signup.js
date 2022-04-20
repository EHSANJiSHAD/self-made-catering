import React, { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';
import googleIcon from '../../../images/logos/google.png'
import SocialLogin from '../SocialLogin/SocialLogin';


const Signup = () => {
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{ sendEmailVerification :true});
    
    
    //   const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

//USEREF/////////////////////////////
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    const handleSubmitUsingRef = event =>{
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;
    

        if(password !== confirmPassword){
            setError1(`PASSWORD DIDN'T MATCH.RE-ENTER PASSWORD`);
            return;
        }
        if(password.length<8){
            setError1('PASSWORD MUST HAVE MINIMUM 8 CHARACTERS');
            return ;
        }
        createUserWithEmailAndPassword(email,password)
    }
//USEREF////////////////////////////
   
      

    // const [email,setEmail] = useState('');
    // const [name,setName] = useState('');
    // const [password,setPassword] = useState('');
    // const [confirmPassword,setConfirmPassword] = useState('');
    const [error1,setError1] = useState('');
    const navigate= useNavigate();

    // const handleEmailBlur = event =>{
    //     setEmail(event.target.value);
    // }

    // const handleNameBlur = event =>{
    //     setName(event.target.value);
    // }

    // const handlePasswordBlur = event =>{
    //     setPassword(event.target.value);
    // }
    // const handleConfirmPasswordBlur = event =>{
    //     setConfirmPassword(event.target.value);
    // }

    

    // const handleCreateUser = event =>{
    //     event.preventDefault();
    //     if(password !== confirmPassword){
    //         setError1(`PASSWORD DIDN'T MATCH.RE-ENTER PASSWORD`);
    //         return;
    //     }
    //     if(password.length<8){
    //         setError1('PASSWORD MUST HAVE MINIMUM 8 CHARACTERS');
    //         return ;
    //     }
    //     createUserWithEmailAndPassword(email,password);
    // }
    if(user){
        navigate('/home');
    }
    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleSubmitUsingRef}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} type="text" placeholder="YOUR NAME" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="ENTER EMAIL"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef}  type="password" placeholder="PASSWORD" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={confirmPasswordRef} type="password" placeholder="CONFIRM PASSWORD" required/>
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="CONFIRM PASSWORD" required/>
                </Form.Group> */}
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error1}</p>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button variant="btn" type="submit" >
                    SIGN UP
                </Button>

                
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;