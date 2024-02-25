import React from 'react'
import {useState} from 'react';
import { auth } from '../firebase/config';
import {createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import {useDispatch} from 'react-redux';
import {setUser} from '../store/usersSlice.js';


const LoginPage = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
    const [loginType, setLoginType] = useState('login');
    const [userCreationals, setUserCreationals] = useState({})
    const [error, setError] = useState('')

    function handleCredentials(e) {
     setUserCreationals({...userCreationals, [e.target.name] : e.target.value});
      console.log(userCreationals)
   }  
    // function handleCredentials(e){
    //    setUserCreationals({...userCreationals, [e.target.value] : e.target.name});
    //    console.log(userCreationals)
    // }


  function handleSingup(e) {
    e.preventDefault();
     setError("");
    createUserWithEmailAndPassword(auth, userCreationals.email, userCreationals.password).then((userCreational) =>{
      const user = userCreational.user
      //dispatch(setUser({id: userCreational.user.uid, email: userCreational.user.email}));
      dispatch(setUser({id: userCreational.user.uid, email: userCreational.user.email}));
      console.log(user)
    }).catch((error) => {
          setError(error.message)
      });
  }

  function handleLogin (e) {
    e.preventDefault();
     setError(" ");
     signInWithEmailAndPassword(auth, userCreationals.email, userCreationals.password)
     .then((userCredential) => {
       const user = userCredential.user;
       dispatch(setUser({id: userCredential.user.uid, email: userCredential.user.email}));
       console.log(user)
     })
     .catch((error) => {
      setError(error.message)
     });

  }

  let handlePasswordResent =()=>{
    const email = prompt("Please Enter your email");
    sendPasswordResetEmail(auth, email)
    alert('Email Send! Cheeck Your Email')
  }


    // function handleCredentials(e) {
    //   setUserCreationals[{...userCreationals, [e.target.name]: e.target.value}]
    //   console.log(userCreationals)
    // }
    //  function handleSingup (e){
    //   e.preventDefault();
    //    setError("");
    //   createUserWithEmailAndPassword(auth, userCreationals.email, userCreationals.password)
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log(user)
    //     // ...
    //   })
    //   .catch((error) => {
    //     setError(error.message)
    //   });
    //  }

  return (
    <>
       { isLoading && <FullPageLoader></FullPageLoader> }
        
        <div className="container login-page">
          <section>
            <h1>Welcome to the Book App</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>Email *</label>
                      <input onChange={(e)=> {handleCredentials(e)}} type="text" name="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-control">
                      <label>Password *</label>
                      <input onClick={(e)=> {handleCredentials(e)}} type="password" name="password" placeholder="Enter your password" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button onClick={(e)=>{handleLogin(e)}} className="active btn btn-block">Login</button>
                    : 
                    <button onClick={(e)=>{handleSingup(e)}} className="active btn btn-block">Sign Up</button>
                  }
                  {
                    error && 
                    <div className='error'>{error} </div>
                  }
                    
                  <p onClick={handlePasswordResent} className="forgot-password">Forgot Password?</p>
                  
              </form>
          </section>
        </div>
    </>
  )
}

export default LoginPage