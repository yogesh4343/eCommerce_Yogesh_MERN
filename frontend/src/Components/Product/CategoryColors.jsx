import React from 'react'

const CategoryColors = ({category , color}) => {
    // console.log(color)
  return (
    <>
       <p className='category text-lg font-bold  '>    {category} -   </p>


       <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]  ' />

       <div className="colors gap-3 flex flex-row sm:flex-row">
        <p className="color w-7 h-7  border-none rounded-full " style={{backgroundColor:color}}>   </p>
        <p className="color w-7 h-7  border-none rounded-full " style={{backgroundColor:color}}>   </p>
        <p className="color w-7 h-7  border-none rounded-full " style={{backgroundColor:color}}>   </p>
        <p className="color w-7 h-7  border-none rounded-full " style={{backgroundColor:color}}>   </p>
        <p className="color w-7 h-7  border-none rounded-full " style={{backgroundColor:color}}>   </p>
       </div>
    </>
  )
}

export default CategoryColors
