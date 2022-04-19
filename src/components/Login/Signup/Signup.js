import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword,useSendEmailVerification } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from './../../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
      );

    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error1,setError1] = useState('');
    const navigate= useNavigate();

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    

    const handleCreateUser = event =>{
        event.preventDefault();
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
    if(user){
        navigate('/home');
    }
    return (
        <div className='login-div container'>
            <Form className='form-div' onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="YOUR NAME" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="ENTER EMAIL"  required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="PASSWORD" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="CONFIRM PASSWORD" required/>
                </Form.Group>
                <p className='nav-bar-bg' style={{color:'#991c0c'}}>{error1}</p>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="btn" type="submit">
                    SIGN UP
                </Button>
            </Form>
        </div>
    );
};

export default Signup;