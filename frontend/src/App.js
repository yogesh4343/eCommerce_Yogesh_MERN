import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact'
import ProductHome from './Components/Product/ProductHome';
import About  from './Components/About/About'
import SingleProductPage from './Components/Product/SingleProductPage';
import MyProfile from './Components/MyProfile/MyProfile';
import EditProfile from './Components/EditProfile/EditProfile';
import Orders from './Components/Orders/Orders';
import SignOut from './Components/SignOut/SignOut';
import Login from './Components/SignOut/Login';
import Register from './Components/SignOut/Register';
import AddToCart from './Components/AddToCart/AddToCart';
// import WishList from './Components/WishList/WishList';
import { useDispatch, useSelector } from 'react-redux';
import AddProduct from './Components/Product/AddProduct';
import SearchBarHide from './SearchBarHide';
import { useEffect } from 'react';
// import store from "./Store/Store"
import { getLoadUserReducer } from './Store/Slice/UserSlice';
import CheckoutSteps from './Components/AddToCart/CheckOutSteps';
import ShippingInfo from './Components/AddToCart/ShippingInfo';
import OrderConfirm from './Components/AddToCart/OrderConfirm';
import ProcessPayment from './Components/AddToCart/ProcessPayment';
import PageNotFound from './Components/Home/PageNotFound';
import ChangePassword from './Components/EditProfile/ChangePassword';

function App() {

  const dispatch = useDispatch();
  //   const { userDetail , loadUser }   = useSelector(state => state.userDetails);
  const {  loadUser  }   = useSelector(state => state.userDetails);
  // console.log(loadUser.status)
  console.log(loadUser , loadUser.message)

  // getLoadUserReducer

  


  useEffect(()=>{
     dispatch(getLoadUserReducer())
    
  },[dispatch , loadUser.success   ])


//   if (loadUser.success) {
//    alert("You Are Logged In ...")
// }


 
  return (
    <div className="App">
       
       <BrowserRouter>
       {/* {userDetail.success && <UserOptions user={userDetail.user} />} */}
       {/* {userDetail.success } */}
        <Routes>
           <Route path='/' element={ <Home />} />

           <Route path="/product/:id" element={ <ProductHome /> } />
           <Route path="/product" element={ <ProductHome /> } />
           
            <Route path="/contact" element={ <Contact /> } />
           <Route path="/about" element={ <About /> } />

           <Route path="*" element={ <PageNotFound /> } />

            <Route path="/singleProduct/:id" element={ <SingleProductPage />} />     
           

            {/* {loadUser.status   &&   <Route path='/myprofile' element={<MyProfile />} /> } */}
              <Route path='/myprofile' element={<MyProfile />} /> 
            {/* {loadUser.status   &&  <Route path='/editprofile' element={<EditProfile />} /> } */}
             <Route path='/editprofile' element={<EditProfile />} /> 
            {/* {loadUser.status   &&   <Route path='/orders' element={<Orders />} /> } */}
             <Route path='/orders' element={<Orders />} /> 
           

             {/* {userDetail.success   &&  <Route path='/admin/product/new' element={<AddProduct />} /> } */}

         

             {loadUser.status   &&  <Route exact path='/admin/product/new' element={<AddProduct />} />  }
           <Route path='/signout' element={<SignOut />} />
         

           <Route path='/login' element={<Login />} />
           <Route path='/register' element={<Register />} /> 
            


         
           
           <Route path='/search' element={<SearchBarHide />} />


           {/* <Route path='/wishlist' element={<WishList />} /> */}




           {/* {userDetail.success   && <Route path='/addtocart' element={<AddToCart />} /> } */}
           {/* {loadUser.status   && <Route exact path='/addtocart' element={<AddToCart />} /> } */}
            <Route path='/addtocart' element={<AddToCart />} /> 

           {loadUser.status   && <Route exact path='/password/update' element={<ChangePassword />} /> }
           {loadUser.status   && <Route exact path='/checkoutsteps' element={<CheckoutSteps />} /> }
           {/* {loadUser.status   && <Route exact path='/shippingInfo' element={<ShippingInfo />} /> } */}
             <Route exact path='/shippingInfo' element={<ShippingInfo />}  />
           {loadUser.status   && <Route exact path='/order/confirm' element={<OrderConfirm />} /> }
           {loadUser.status   && <Route exact path='/process/payment' element={<ProcessPayment/>} /> }

           


        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
