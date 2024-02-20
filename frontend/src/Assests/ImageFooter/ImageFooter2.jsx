import React from 'react'
import ImageFooterImage2 from '../../Images/ImageFooter2.jpg'
import "./ImageFooter.css"

const ImageFooter2 = () => {
  return (
    <div>
        <div className="container  relative cursor-pointer  ">
            <div className="imageBox">
                    <img src={ImageFooterImage2} alt="ImageFooterImage2" className='hover:scale-105 '  />
            </div>


            <div className="cont  absolute  top-[20%]  left-8 ">

            <div className="lightHeading text-sm md:text-md  text-[#6a747e] mb-1   ">
                    50% Offer in Winter →
                </div>


                <div className="heading mb-3">
                {/* <p className='one text-5xl font-bold text-gray-200    '> Get VR,</p> */}
                {/* <p className='one text-5xl font-bold text-gray-200  '> Reality Glass</p> */}
                <p className='one  text-[1.2rem] text-gray-200  sm:text-3xl  md:text-5xl font-semibold md:mt-3 text-left   '> Get VR,</p>
                <p className='one text-[1.2rem] text-gray-200  sm:text-3xl  md:text-5xl font-semibold md:mt-3 text-left '> Reality Glass</p>
                </div>


            
            </div>

            
        </div>
    </div>
  )
}

export default ImageFooter2
