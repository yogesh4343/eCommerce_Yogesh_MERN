import React, { useEffect, useState } from 'react'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import NavBar from '../../Assests/NavBar/NavBar'
import { registerReducer } from '../../Store/Slice/UserSlice';

const Register = () => {

  const navigate = useNavigate();

  const [name , setName] = useState("");
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState("")
  const dispatch = useDispatch() 



  // func 
  const signupFunc = (e)=>{
    console.log('signup func')
    e.preventDefault();

    const obj={
    name , email , password
  }
    
    dispatch(registerReducer(obj))


    navigate('/login')


  }



  useEffect(()=>{


  },[dispatch])


  return (
    <div>
    <NavBar />

<section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample_image" />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>

          <button type="button" className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]">

            <BiLogoFacebook size={20} className="flex justify-center items-center w-full"     />
          </button>

          <button type="button" className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]" >

            <AiOutlineTwitter size={20} className="flex justify-center items-center w-full"    />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
        <p className="mx-4 mb-0 text-center font-semibold text-slate-500"> Or </p>  
        </div>

        <input  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}  /> 

        {/* <br /> <br />  */}
               
        <input className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 "  type="text" placeholder="Email Address" value={email} onChange={(e)=> setEmail(e.target.value)} />

        <input  className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4" type="password" placeholder="Password"  value={password} onChange={(e)=>setPassword(e.target.value)}  />
       
       


        <div className="text-center md:text-left">
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider" type="submit" onClick={signupFunc}> SignUp
          </button>
        </div>

        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left"> Have an account?{" "}

          <NavLink to='/login'>
          <div className="text-red-600 hover:underline hover:underline-offset-4"  > Login </div>
          </NavLink>
        </div>
      </div>
    </section>



    </div>
  )
}

export default Register
