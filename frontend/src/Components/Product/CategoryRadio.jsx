// import React, { useEffect, useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { getCategoryhReducer, getSearchReducer, productReducer } from '../../Store/Slice/ProductSlice'

// const CategoryRadio = ({category , prod}) => {
  
// const dispatch = useDispatch()
//   const {product} = {...prod}
//   // console.log(product)

//   const[radioBtn, setRadioBtn] = useState('')


//   useEffect(()=>{
//         // dispatch(getSearchReducer(radioBtn))
//         dispatch(getCategoryhReducer(radioBtn))
//         // dispatch(productReducer())
//   },[ dispatch , radioBtn ,])

  

//   const radioBtnFunc = (e)=>{
//     setRadioBtn(e)
//   }

//   const radioFunc = (e)=>{
//     // setRadioBtn(e)
//     dispatch(productReducer())
//   }
  
//   // console.log(radioBtn);


//   return (
//     <>
//         <p className='category text-lg font-bold  '>    {category} -   </p>
//         {/* <hr /> */}
//                 <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' />
//                     {/* <input type="radio" id="html" name="Phone" value="Phone" />
//                     <label for="html">Phone</label> <br/>
//                     <input type="radio" id="css" name="Pc" value="Pc" />
//                     <label for="Pc">Pc</label><br/>
//                     <input type="radio" id="javascript" name="Laptop" value="Laptop" />
//                     <label for="javascript">Laptop</label> */}

//                     <form className=" ">
//                         <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>radioFunc(e.target.value)} />
//                         <label for="ALL" className=" text-base">ALL</label>
//                         <br />
//                         <input id="one" type="radio" name="radios" value="Phones" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)} />
//                         <label for="Phone" className=" text-base">Phone</label>
//                         <br />
//                         <input id="two" type="radio" name="radios" value="Pc" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
//                         <label for="Pc">Pc</label>
//                         <br /> 
//                         <input id="three" type="radio" name="radios" value="Laptop" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
//                         <label for="Laptop">Laptop</label>
//                         <br />
//                         <input id="four" type="radio" name="radios" value="Tv"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
//                         <label for="Tv">Tv</label>



//                         {/* {product && product.map((cur,el)=>{
//                          return <div>
//                           <input id={el} type="radio" name="radios" value={cur.category}  className="mr-3"     />
//                         <label for={cur.category}>{cur.category}</label> 
//                         </div>
//                         })} */}
//                         <span></span>
//                     </form>
//     </>
//   )
// }

// export default CategoryRadio
