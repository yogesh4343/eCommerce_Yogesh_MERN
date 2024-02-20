import React from 'react'

const CategoryName = (props) => {
    const category = props.category
  return (
    <>
           <div className="categoryHeading text-2xl   sm:text-3xl  md:text-4xl font-semibold mt-3 text-left ">
           {category}  </div> 
    </>
  )
}

export default CategoryName
