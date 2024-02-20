import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../Assests/NavBar/NavBar'
import { UpdateReducer } from '../../Store/Slice/UserSlice';

const EditProfile = () => {

const dispatch = useDispatch();

  const {loadUser} = useSelector((state) => state.userDetails);
  const {existingUser} = loadUser;
  const {name:existingUserName , email:existingUserEmail  } = {...existingUser};
  const {avatar} = {...existingUser};
  const {url} = {...avatar};

  const [name , setName] = useState(existingUserName)
  const [email , setEmail] = useState(existingUserEmail)
  
  
  
  const updateBtnFunc = ()=>{
    let cont = {
      name,email
    }

    const myForm = new FormData();

  myForm.set("name",name);
  myForm.set("email",email);

    // console.log(`formis` ,myForm)
    console.log(`formis` ,cont)


    // console.log('update', newName , newEmail)
    // dispatch(UpdateReducer(newName,newEmail));
    dispatch(UpdateReducer(myForm));
  }

  

  return (
    <div classname="">
    <NavBar />


<div className="container flex justify-center items-center align-middle  h-[70vh]">
 
  <div className="border-b-2 block md:flex">

    <div className="w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md">
      <div className="flex justify-between">
        <span className="text-xl font-semibold block">Admin Profile</span>
        <p  className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Edit</p>
      </div>

      <span className="text-gray-600">This information is secret so be careful</span>
      <div className="w-full p-8 mx-2 flex justify-center">
        {/* <img id="showImage" className="max-w-xs w-32 items-center border" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt="" />                           */}
        <img id="showImage" className="max-w-xs w-32 items-center border" src={url} alt="prl" />                          
        </div>
    </div>
    
    <div className="w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md">
      <div className="rounded  shadow p-6">
        <div className="pb-6">
          <label for="name" className="font-semibold text-gray-700 block pb-1">Name</label>
          <div className="flex">
            <input  id="username" className="border-1  rounded-r px-4 py-2 w-full" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
          </div>
        </div>
        <div className="pb-4">
          <label for="about" className="font-semibold text-gray-700 block pb-1">Email</label>
          <input  id="email" className="border-1  rounded-r px-4 py-2 w-full" type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
          <span className="text-gray-600 pt-4 block opacity-70">Personal login information of your account</span>

          <button type="button" onClick={updateBtnFunc} className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
        </div>
      </div>
    </div>

  </div>
 
</div>
    </div>
  )
}

export default EditProfile
