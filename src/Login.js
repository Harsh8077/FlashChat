import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import logo from "./logo.png";
import {auth,provider} from "./firebase"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login(){
    const [{},dispatch] = useStateValue();
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,

            })
        })
        .catch((error)=> alert(error.message));
    };

    return (
        <div className='login'>
            <div className='login__container'>
                <img src={logo} alt='logo'/>
                <div className='login__text'>
                    <h1>Sign in to Flash Chat</h1>
                </div>

                <Button type='submit' onClick={signIn}>
                    Sign In with Google
                </Button>
            </div>
        </div>
    )
}

export default Login;