import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LargeButton from '../../Assests/Buttons/LargeButton'
import NavBar from '../../Assests/NavBar/NavBar'
import { UpdatePasswordReducer } from '../../Store/Slice/UserSlice'
import "./ChangePassword.css"

const ChangePassword = () => {

    const dispatch = useDispatch();


    const[password , setPassword] = useState('')
    const[newPassword , setNewPassword] = useState("")
    const[confirmPassword , setConfirmPassword] = useState("")


    const updatePasswordSubmit= (e)=>{
        console.log(`updatePasswordSubmit`)
        e.preventDefault()

        const myForm = new FormData();

        myForm.set("password", password);
        myForm.set("newPassword", newPassword);
        myForm.set("confirmPassword", confirmPassword);

        console.log(myForm) 

        dispatch(UpdatePasswordReducer(myForm))
    }

  return (
      <div>
        <NavBar />

        <div className="updatePasswordContainer">
            <div className="updatePasswordBox">
              <h2 className="updatePasswordHeading">Update Profile</h2>

              <form
                className="updatePasswordForm"
                onSubmit={updatePasswordSubmit}
              >
                <div className="loginPassword">
                  {/* <VpnKeyIcon /> */}
                  <input
                    type="password"
                    placeholder="Old Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="loginPassword">
                  {/* <LockOpenIcon /> */}
                  <input
                    type="password"
                    placeholder="New Password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <div className="loginPassword">
                  {/* <LockIcon /> */}
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input
                  type="submit"
                  value="Change"
                  className="updatePasswordBtn"
                />
              </form>
            </div>
          </div>
          {/* <LargeButton btn="Back To Products "/> */}
    </div>
  )
}

export default ChangePassword
