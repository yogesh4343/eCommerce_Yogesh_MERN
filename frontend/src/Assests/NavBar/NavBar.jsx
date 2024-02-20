import React, {  useState } from 'react'
import "../../App.css"
// import SearchIcon from '@mui/icons-material/Search';
// npm install @mui/icons-material
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import Hamburger from 'hamburger-react'
import { ProfileMenu } from './UserAccount';
import Search from '@mui/icons-material/Search';
import {  NavLink } from "react-router-dom";
import SearchBarHide from '../../SearchBarHide';
// import ScreenSearchDesktopSharpIcon from '@mui/icons-material/ScreenSearchDesktopSharp';
import { useSelector } from 'react-redux';




const NavBar = () => {

  const [navHide , setNavHide] = useState(true);
  const [searchBar , setSearchBar] = useState(false);


  // const { userDetail , loadUser }   = useSelector(state => state.userDetails);
  const {cartDetails } = useSelector(state => state.cart)
  const {cartItems} = {...cartDetails}
  // console.log(loadUser.status)
  // console.log(`cartLength`, cartItems.length)
  

  const searchBtn = ()=>{
    console.log("SearchFunc clicked");
    // searchBar === true ? setSearchBar(false) : setSearchBar(true) 
    
    console.log(searchBar);
  }


  //addToCartIcon
  const addToCartIcon = ()=>{
    console.log(`addToCartIcon`)
  }

// useEffect(()=>{

// },[loadUser])



  return (
    <>
       <div className="w-full bg-white text-black m-auto p-7 flex justify-between relative shadow-xl cursor-pointer md:rounded-xl  " >
       
       
             <NavLink to="/" > <div className="left flex items-center font-serif text-lg ">eCommerce</div> </NavLink>
           {navHide?  <div className="middle hidden w-[38%] pl-9 pr-9 justify-center  md:flex cursor-pointer ">
           
                <ul className='flex justify-between items-center  w-full left-[237px] font-bold'>

                


                <NavLink to="/" className=' hover:text-red-600'>Home</NavLink>
                    <NavLink  to="/product"  className=' hover:text-red-600'>Product</NavLink>
                    <NavLink to="/about" className=' hover:text-red-600' >About</NavLink>
                    <NavLink to="/contact" className=' hover:text-red-600' >Contact</NavLink>


                </ul>
            </div> :  <div className="middle pl-14 pr-14 justify-center absolute text-black bg-[#dedfe2] shadow-2xl top-[6.6rem]  h-[100vh] p-5 right-0  md:flex cursor-pointer z-10  ">
                <ul className='flex flex-col justify-center items-center gap-10 font-bold '>


                <NavLink to="/" className=' hover:text-red-600'>Home</NavLink>
                    <NavLink  to="/product"  className=' hover:text-red-600'>Product</NavLink>
                    <NavLink to="/about" className=' hover:text-red-600' >About</NavLink>
                    <NavLink to="/contact" className=' hover:text-red-600' >Contact</NavLink>

                    
                </ul>

                
            </div>}


            <div className="right  flex justify-end gap-4 cursor-pointer ">
                <div className="search flex items-center  hover:text-red-600 relative" onClick={()=>searchBtn(setSearchBar(!searchBar))}> <Search /> 
                {/* <div className="search flex items-center  hover:text-red-600 relative" onClick={searchBtn}> {searchBar ?  <ScreenSearchDesktopSharpIcon /> : <Search /> } */}
                
                {/* {searchBar ? <div className="absolute top-20 w-[70vw] shadow-2xl p-5 bg-blue-gray-100 right-[-10rem] sm:right-0   "> */}
                  {/* <SearchBarHide /> */}
                {/* </div> :  <Search />} */}

                 </div>


                {/* <div className="search flex items-center  hover:text-red-600 " > <input type="text" className="text-black p-2 rounded-lg" placeholder='Search Here' />  </div> */}
  
               {/* <div className="heart flex items-center  hover:text-red-600 relative">  <NavLink to="/wishlist">    <FavoriteBorderIcon /> <span className="absolute bg-red left-3 bottom-8 text-center w-5 h-5 flex items-center justify-center rounded-md bg-blue-600 text-white  ">0</span> </NavLink>  </div>  */}


             <div className="cart flex items-center   hover:text-red-600 relative " onClick={addToCartIcon}>  <NavLink to="/addtocart">  <ShoppingCartIcon /> <span className="absolute bg-red left-3 bottom-8 text-center w-5 h-5 flex items-center justify-center rounded-md bg-blue-600 text-white  ">{cartItems.length}</span> </NavLink>   </div> 



{/* {loadUser.status ?
             <div className="cart flex items-center   hover:text-red-600 relative " onClick={addToCartIcon}>  <NavLink to="/addtocart">  <ShoppingCartIcon /> <span className="absolute bg-red left-3 bottom-8 text-center w-5 h-5 flex items-center justify-center rounded-md bg-blue-600 text-white  ">0</span> </NavLink>   </div>  : null } */}


                <div className="user flex items-center   hover:text-red-600 ">   <ProfileMenu />
              </div>

               

              


                
                 {navHide===true ?  <div className="hamburger cursor-pointer md:hidden w-12 " onClick={()=> setNavHide(false)} > <Hamburger /></div> :  <div className="cross cursor-pointer   md:hidden" onClick={()=>setNavHide(true)}> <Hamburger /></div> }

                 
            </div>
       </div>


       {searchBar ? <div className="  searchBar     p-12">

<SearchBarHide />
</div> : null}
    </>
  )
}

export default NavBar
