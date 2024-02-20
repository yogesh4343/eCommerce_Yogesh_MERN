import React from 'react'
import { NavLink } from 'react-router-dom'
// import CategoryName from './CategoryName'
import Speaker from "../Images/Speaker.jpg"

const ProductHeader = () => {
  return (
    <>
        <div className=" py-6 px-6 cursor-pointer bg-[#f8f8f8] flex justify-between md:py-16 md:px-20">
            <div className="leftSide">
                    <div className="leftTop font-semibold"> 
                       <NavLink to="/">  <span className="text-gray-500 hover:text-[#3477f0]"> HOME  </span>  </NavLink> | <span className="text-[#3477f0]"> SHOP </span>
                    </div>

                    <div className="leftBottom">
                        {/* <CategoryName category="Explore All Products" /> */}
                        <div className="categoryHeading text-2xl   sm:text-3xl  md:text-5xl font-semibold mt-3 text-left ">
                        Explore All Products </div> 
                    </div>

            </div>
            
            <div className="rightSide">
                 <img src={Speaker} alt="Speaker" />
            </div>
        </div>
    </>
  )
}

export default ProductHeader
