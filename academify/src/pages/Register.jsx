import React, { useState ,useEffect} from 'react'
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import { auth } from '../firebase-config'
import { Link } from 'react-router-dom'
import '../styles/login.css'

function Register() {
    const [registerEmail, setRegisterEmail]=useState('')
    const [registerPassword, setRegisterPassword]=useState('')
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
                ></input> <br></br>
                <input className='password'
                    type='password'
                    placeholder='Password'
                    onChange={(event)=>{setRegisterPassword(event.target.value)}}
                ></input>
                <div className='submit'>
                <button onClick={register}>Register</button> </div>
            </form>
            <h4>Already registered? Try <Link to= '/login'>logging in</Link>  </h4>
            </div>
            </div>
            <h3>User logged in: </h3>{user?.email}
            <button onClick={logout}>Signout</button>
        
    </div>
  )
}

export default Register