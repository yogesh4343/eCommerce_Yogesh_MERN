import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
import CheckoutSteps from './CheckOutSteps'
import "./OrderConfirm.css"

const OrderConfirm = () => {

    // const navigate = useNavigate();
    const  {  cartDetails , shippingInfo}  = useSelector((state) => state.cart);
    const  {loadUser}  = useSelector((state) => state.userDetails);
    const {cartItems} = cartDetails;
    const {existingUser} = loadUser
    console.log(cartItems , shippingInfo , existingUser)


    const proceedToPayment = ()=>{

        const data = {
            subtotal,
            shippingCharges,
            tax,
            totalPrice,
          };

          
        // session =-==
    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    // navigate("/process/payment");
    }

    // subtotal 
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.quantity * item.price,
        0
      );

    //   shipping 
    const shippingCharges = subtotal > 1000 ? 0 : 200;


    const tax = subtotal * 0.18;

  const totalPrice = subtotal + tax + shippingCharges;

  
  const address = `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;






  return (
    <>
        <CheckoutSteps activeStep={1} />
      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Shipping Info</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Name:</p>
                <span> {existingUser.name} </span>
              </div>
              <div>
                <p>Phone:</p>
                <span> {shippingInfo.phoneNo} </span>
              </div>
              <div>
                <p>Address:</p>
                {/* <span>{address}</span> */}
                <span> {address} </span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {/* {cartItems && */}
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.product}>
                    <img src={item.image} alt="Product" />
                    <NavLink to={`/singleProduct/${item.product}`}> {item.name} </NavLink>{" "}
                    <span> {item.quantity} X ₹{item.price} ={" "} <b>₹{item.price * item.quantity}</b> </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <div className="orderSummary">
            <Typography>Order Summery</Typography>
            <div>
              <div>
                <p>Subtotal:</p>
                <span>₹ {subtotal} </span>
              </div>
              <div>
                <p>Shipping Charges:</p>
                <span>₹ {shippingCharges} </span>
              </div>
              <div>
                <p>GST:</p>
                <span>₹ {tax}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Total:</b>
              </p>
              <span>₹{totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Proceed To Payment</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderConfirm
