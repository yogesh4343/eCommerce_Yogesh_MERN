import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../../Assests/NavBar/NavBar'

const SignOut = () => {
const navigate = useNavigate()


  useEffect(()=>{
    navigate('/')
  },[navigate])


  return (
    <div>
    <NavBar />
      SignOut
    </div>
  )
}

export default SignOut
