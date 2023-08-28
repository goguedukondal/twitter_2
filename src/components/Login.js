import React from 'react'
import './Login.css'
import {useState} from 'react'
function Login({setIsLoggedIn}) {
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const userName='Geekster'
    const Passcode='123456'
    const Authuntication=()=>{
        if(password===Passcode&&username===userName){
            setIsLoggedIn(true)
        }
        else{
            alert('Please Enter Valid Details')
        }
    }
  return (
    <div className='Login_Container'><h2 className='header'>Login Form</h2>
        <label>UserName</label><input  className='username' type='text' value={username} placeholder='Enter Username...' onChange={(e)=>setusername(e.target.value)}/>
        <label>Password</label>
        <input className='password' type='password' value={password} placeholder='Enter Password...' onChange={(e)=>setpassword(e.target.value)} />
        <button className='loginButton' onClick={Authuntication}>Login</button>

    </div>
  )
}

export default Login