import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { CategoryReducer, productReducer, singleCategoryReducer } from '../Store/Slice/ProductSlice'

const SmallCard = ({img , categoryOne , categoryTwo  , width} ) => {
  // let keyword = ""
  // let brand = ""
  // let ratings = ""
  // let price = ""

  // const [newCategory , setNewCategory] = useState('')
  const dispatch = useDispatch()
  // const navigate = useNavigate()

// let getNewCategory = ""

  const clickFunc=(category)=>{
    console.log(`clickFunc` , category)
    // let getNewCategory = category

    
    // setNewCategory(category)
    // console.log(`clickFunc NewCategory` , newCategory)
    
    
    // setNewCategory(category)
    // dispatch(CategoryReducer(category))
    // dispatch(productReducer(keyword, category , brand ,  ratings , price  ))
    // navigate('/product')
  }
  // console.log(`clickFunc NewCategory` , getNewCategory)
    
    useEffect(()=>{
      // dispatch(singleCategoryReducer(newCategory))
    },[dispatch  ])


  return (
    <>
        {/* <div className="box w-40 h-36 bg-white-300 text-black  mt-12 flex flex-col justify-center  align-middle items-center text-center border-gray-100 hover:scale-110  flex-wrap  drop-shadow-lg shadow-slate-700 shadow-xl rounded-lg   "> */}
        <div className="box w-[11rem] h-[12rem] bg-white-300 text-black  mt-12 flex flex-col justify-center  align-middle items-center text-center border-gray-100 hover:scale-110  flex-wrap  drop-shadow-lg shadow-slate-700 shadow-xl rounded-lg   " value={categoryOne}  onClick={(e)=>clickFunc(e.target.value)}>
            {/* <img className=" w-24 " src={img} alt="img" /> */}
            {/* <img className={`w-${width}`} src={img} alt="img" /> */}
            <img className={width} src={img} alt="img" />
            <br />
            <p>{categoryOne}</p>
            <p className="">{categoryTwo}</p>

        </div> 

{/* <div class="flex flex-col bg-white p-auto">
      <div
        class="flex overflow-x-scroll pb-10 hide-scroll-bar"
      >
        <div
          class="flex flex-nowrap "
        >
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >qw</div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
          <div class="inline-block px-3">
            <div
              class="w-64 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            ></div>
          </div>
        </div>
      </div>
</div> */}

    </>
  )
}

export default SmallCard
