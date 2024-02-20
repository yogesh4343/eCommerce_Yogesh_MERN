import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CategoryName from './CategoryName';
import SmallCard from './SmallCard';

import gift from "../Images/gift.jpg"
import percent from "../Images/percent.jpg"
import phone from "../Images/phone.jpg"
import support from "../Images/support.jpg"
import returnImg from "../Images/return.jpg"

let giftVal_1 = "Money Back ";
let percentVal_1 = "Money Back "
let phoneVal_1 = "Next Level Pro "
let returnVal_1 = "24 Hour Return "
let supportVal_1    = "Pro Quality "

let giftVal_2 = " Guarantee";
let percentVal_2 = " Guarantee"
let phoneVal_2 = " Quality"
let returnVal_2 = " Policy"
let supportVal_2    = " Support"

const WhyUs = () => {
  return (
    <>
        <div className="container my-24  ">
                    <div className="main flex justify-center flex-col text-center items-center ">
                        <div className="categoryTag flex flex-column  items-center gap-2 "> 
                        <div className="categoryLogo w-9 h-9 bg-blue-300 rounded-2xl flex flex-column  text-center items-center justify-center   ">
                        <ThumbUpOffAltIcon />
                        </div>
                        <div className="category font-bold text-blue-gray-900 ">

                        Why Us
                        </div> 
                        </div>

                        <CategoryName category="Why People Choose Us"/>
                    </div>


                   <div className="support flex gap-4 flex-wrap  md:px-7  md:gap-8  justify-center ">
                   <SmallCard  img={gift} categoryOne={giftVal_1}   categoryTwo={giftVal_2}   />
                    <SmallCard  img={percent} categoryOne={percentVal_1}    categoryTwo={percentVal_2} />
                    <SmallCard  img={phone} categoryOne={phoneVal_1}    categoryTwo={phoneVal_2} />
                    <SmallCard  img={returnImg} categoryOne={returnVal_1}    categoryTwo={returnVal_2}   />
                    <SmallCard  img={support} categoryOne={supportVal_1}    categoryTwo={supportVal_2} />
                   </div>
        </div> 
    </>
  )
}

export default WhyUs
