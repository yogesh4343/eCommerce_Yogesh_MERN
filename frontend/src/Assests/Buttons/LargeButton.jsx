import React from 'react'

const LargeButton = (props) => {
    const btn =   props.btn
  return (
    <>
        <div className="button pt-5 pb-5 pl-8 pr-8 bg-[#3477f0] w-fit rounded-2xl text-white font-semibold cursor-pointer hover:scale-110 1s ">
               {btn}
        </div> 
    </>
  )
}

export default LargeButton
