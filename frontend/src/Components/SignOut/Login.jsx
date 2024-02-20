import React, { useEffect, useState } from 'react'
import NavBar from '../../Assests/NavBar/NavBar'
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { loginReducer } from '../../Store/Slice/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { loginReducer } from '../../Store/Slice/UserSlice';

const Login = () => {

  const dispatch = useDispatch() ;
  const navigate = useNavigate();
  const location = useLocation();

  const {userDetail , insertUser , loadUser } = useSelector(state => state.userDetails)
  const {success  } = {...userDetail}
  const {existingUser , success:successes} = {...insertUser}
  // console.log(loadUser.status)
  const {name:oldName , email:oldEmail   } = {...existingUser}
  // console.log(oldName , oldEmail);

  const [email , setEmail] = useState(oldName)
  const [password , setPassword] = useState(oldEmail)
  // console.log(email , password);


  const loginFunc =(e)=>{
    e.preventDefault();

        dispatch(loginReducer(email , password));

        if(loadUser.status === true){
          navigate('/')
          // navigate('/shippingInfo');
        }

  }

  const redirect = location.search ? location.search.split("=")[1] : "/product";



  useEffect(()=>{
    // if(success){
    // if(success){
    //   // navigate('/product')
    //   navigate(redirect)
    // }

    if(loadUser.message){
      navigate('/')
    }
    

  },[dispatch , navigate  ,success, redirect, location, loadUser])
  // },[dispatch])

  return (
    <>
        <NavBar /> 



    <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample_image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9  rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <BiLogoFacebook
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <AiOutlineTwitter
              size={20}
              className="flex justify-center items-center w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            Or
          </p>
        </div>


        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}

        />
       
        <input
          className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
       


        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit" onClick={loginFunc}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}

          <NavLink to='/register'>
          <div
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="#"
          >
            Register
          </div>
          </NavLink>
        </div>
      </div>
    </section>


    </>
  )
}

export default Login
