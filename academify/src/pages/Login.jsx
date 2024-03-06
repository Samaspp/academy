import React, { useState ,useEffect} from 'react'
import { signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../firebase-config'

import '../styles/login.css'

function Login() {
    const [loginEmail, setLoginEmail]=useState('')
    const [loginPassword, setLoginPassword]=useState('')
    const [user, setUser]=useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
        return () => unsubscribe();
    }, []);
    
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

            <div className='login'>
            <form>
        <h2>Login</h2>
           
                <input className='email'
                    type='text'
                    placeholder='Email'
                    onChange={(event)=>{setLoginEmail(event.target.value)}}
                ></input><br></br>
                <input className='password'
                    type='password'
                    placeholder='Password'
                    onChange={(event)=>{setLoginPassword(event.target.value)}}
                ></input>
                <div className='submit'>
                <button onClick={login}>Login</button> </div>
            </form>
            </div>
            </div>
            <h3>User logged in: </h3>{user?.email}
            <button onClick={logout}>Signout</button>
        
    </div>
  )
}

export default Login