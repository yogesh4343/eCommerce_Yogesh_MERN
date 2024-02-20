import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  NavLink, useNavigate } from 'react-router-dom'
// import { Typography } from "@material-ui/core";
import NavBar from '../../Assests/NavBar/NavBar'
// import { createGlobalStyle } from 'styled-components';
import {  removeToCartReducer } from '../../Store/Slice/CartSlice';
import LargeButton from "../../Assests/Buttons/LargeButton"

const AddToCart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {cartDetails } = useSelector(state => state.cart)
  const {loadUser } = useSelector(state => state.userDetails)
  const {cartItems} = {...cartDetails}
 


  const ttl = cartItems.map((curEl,id)=>{
    return curEl.price
  })
  const ttlArray = ttl.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0)
  // console.log(`ttl` , ttlArray)

  let sub = ttlArray + 100


  const crossFunc=(id)=>{
      // console.log(`crossFunc` , id)
      dispatch(removeToCartReducer(id))
  }

  const checkoutHandler=()=>{

      if(loadUser.success != true){
      
        navigate("/login");
      }else{
        navigate('/shippingInfo');
          }
  }
  

  // useEffect(()=>{

  // },[navigate]);;


  return (
    <div className="h-full">


      <NavBar />
      {/* AddToCart */}

      {cartItems.length === 0 ?  <div className="emptyCart flex flex-col text-center items-center justify-center my-20 gap-8">

          <p className="text-4xl font-bold">No Product in Your Cart</p>
           <NavLink to="/product"> <LargeButton btn="View Products " />  </NavLink>

        </div>
        
        : <div>
        <div className="cartPage ">
  <div className="h-full bg-gray-100 pt-20">
    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">


            {cartItems && cartItems.map((curEl,id)=>{
              return <div key={id}>
              <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          {/* <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" alt="product-image" className="w-full rounded-lg sm:w-40" /> */}
         <div>  <img src={curEl.image}  className=" h-28  rounded-lg sm:w-40" alt="productimage" />  </div>
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{curEl.name}</h2>
              <p className="mt-1 text-xs text-gray-700">{curEl.category}</p>
            </div>
            <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center justify-end border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>decreaseQuantity(curEl.product , curEl.quantity , curEl.stock )}> - </span>
                {/* <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" min="1" /> */}
                <span> {curEl.quantity} </span>
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50" onClick={()=>increaseQuantity(curEl.product , curEl.quantity , curEl.stock)}> + </span>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-sm"> ₹ {curEl.price}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={()=>crossFunc(curEl.product)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
          </div>
        </div>
              </div>
            })}



      </div>


      {/* crt */}


    

      <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div className="mb-2 flex justify-between">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">₹ {ttlArray}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">₹ 100</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold flex justify-end">{sub}</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" onClick={checkoutHandler}>Check out</button> 
      </div>
    </div>
  </div>

       
          </div>
        </div>
        }
    </div>
  )
}

export default AddToCart




