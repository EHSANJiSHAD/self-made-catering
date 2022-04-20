import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/logos/google.png'

const SocialLogin = () => {
    // const location = useLocation();
    // const from = location.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='nav-bar-bg'>Error: {error.message}</p>
        </div>

    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement};
            <button onClick={() => signInWithGoogle()} className='logout-btn '>
                <img style={{ width: '30px', paddingBottom: '4px', marginRight: '2px' }} src={googleIcon} alt="" />
                <span>GOOGLE SIGN IN</span>
            </button>
        </div>
    );
};

export default SocialLogin;