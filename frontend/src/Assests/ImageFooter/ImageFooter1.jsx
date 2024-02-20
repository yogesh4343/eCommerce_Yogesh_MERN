import React from 'react'
import ImageFooterImage1 from '../../Images/ImageFooter1.jpg'
// import CategoryName from '../CategoryName'
import "./ImageFooter.css"


const ImageFooter1 = ({img}) => {
  return (
    <div>
        <div className="container relative cursor-pointer ">
            <div className="imageBox">
                    <img src={ImageFooterImage1} alt="ImageFooterImage1" className='hover:scale-105' />
            </div>

            <div className="cont  absolute top-[20%]  right-16 ">
                <div className="heading mb-3">
                {/* <p className='one text-5xl font-bold text-gray-200    '>Rich Sound,</p> */}
                {/* <p className='one text-5xl font-bold text-gray-200  '> for less...</p> */}


                <div className="one text-[1.2rem] text-gray-200  sm:text-3xl  md:text-5xl font-semibold md:mt-3 text-left ">   Rich Sound, </div> 
                {/* <div className="one text-2xl text-gray-200  sm:text-3xl  md:text-5xl font-semibold mt-3 text-left ">  for less </div>  */}
                <div className="one  text-[1.2rem] text-gray-200  sm:text-3xl  md:text-5xl font-semibold md:mt-3 text-left ">  for less </div> 

                </div>


                <div className="lightHeading text-xs md:text-md  text-[#6a747e]    ">
                    Collection →
                </div>
            </div>

        </div>
    </div>
  )
}

export default ImageFooter1
