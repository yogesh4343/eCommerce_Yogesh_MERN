import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import "./MyProfile.css"
import NavBar from '../../Assests/NavBar/NavBar'
import { useSelector } from 'react-redux'

const MyProfile = () => {

  const {loadUser} = useSelector((state) => state.userDetails);
  const {existingUser} = loadUser;
  const {name , email ,  role , createdAt } = {...existingUser};
  const {avatar} = {...existingUser};
  const {url} = {...avatar};
  // console.log(name , email ,  role , createdAt );
  // console.log(url);


  useEffect(()=>{

  },[loadUser])


  return (
    <div>
    <NavBar />
      MyProfile
      <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src={url} alt={name} />
              {/* <img src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561_1280.png" alt={name} /> */}
              <NavLink to="/editprofile">Edit Profile</NavLink>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(createdAt).substr(0, 10)}</p>
              </div>

              <div>
                {/* <NavLink to="/orders">My Orders</NavLink> */}
                <NavLink to="/password/update">Change Password</NavLink>
              </div>
            </div>
          </div>
    </div>
  )
}

export default MyProfile