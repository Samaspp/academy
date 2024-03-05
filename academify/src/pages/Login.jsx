import React, { useState ,useEffect} from 'react'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../firebase-config'
//import '../styles/login.css'

function Login() {
    const [registerEmail, setRegisterEmail]=useState('')
    const [registerPassword, setRegisterPassword]=useState('')
    const [loginEmail, setLoginEmail]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    const [user, setUser]=useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
        return () => unsubscribe();
    }, []);
    

    const register = async (event) =>{
        event.preventDefault()
        try{
        const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword) 
        console.log(user)
        setRegisterEmail('')
        setRegisterPassword('')
        }catch(error){
            console.log(error.message)
        }
    }

     const login = async (event) =>{
        event.preventDefault()
        try{
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            setLoginEmail('')
            setLoginPassword('')
        }catch(error){
            console.log(error.message)
        }

    }

    const logout = async () => {
            await signOut(auth)
        }
  return (
    <div className='login'>
        
        <div className='container'>
            <div className='register'>
        <h2>Register</h2>
            <form>
                <input className='email'
                    type='text'
                    placeholder='Email'
                    onChange={(event) =>{setRegisterEmail(event.target.value)}}
                ></input>
                <input className='password'
                    type='password'
                    placeholder='Password'
                    onChange={(event)=>{setRegisterPassword(event.target.value)}}
                ></input>
                <div className='submit'>
                <button onClick={register}>Register</button> </div>
            </form>
            </div>

            <div className='login'>
        <h2>Login</h2>
            <form>
                <input className='email'
                    type='text'
                    placeholder='Email'
                    onChange={(event)=>{setLoginEmail(event.target.value)}}
                ></input>
                <input className='password'
                    type='password'
                    placeholder='Password'
                    onChange={(event)=>{setLoginPassword(event.target.value)}}
                ></input>
                <div className='submit'>
                <button onClick={login}>Login</button> </div>
            </form>
            </div>
            
            <h3>User logged in: </h3>{user?.email}
            <button onClick={logout}>Signout</button>
        </div>
    </div>
  )
}

export default Login