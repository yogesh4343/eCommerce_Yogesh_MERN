import React, { useEffect } from 'react'
import LargeButton from '../../Assests/Buttons/LargeButton'
import MusicHeroSection from '../../Assests/MusicHeroSection'
import NavBar from '../../Assests/NavBar/NavBar'
import WhyUs from '../../Assests/WhyUs'
import ProductExplore from '../../ProductExplore'
import Category from '../Category/Category';

import ImageFooter1 from '../../Assests/ImageFooter/ImageFooter1'
import ImageFooter2 from '../../Assests/ImageFooter/ImageFooter2'
import Footer from '../Footer/Footer'
import EmailSection from '../../Assests/EmailSection/EmailSection'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryReducer, catReducer } from '../../Store/Slice/ProductSlice'
import { NavLink } from 'react-router-dom'

const Home = () => {

  const dispatch = useDispatch() 
  // const dispatch = useDispatch() 
  const {categoryProduct } = useSelector(state=>state.products)
  const {product} = {...categoryProduct}
  // console.log(product)

// let category = "Laptop"

// ============================================================================================================ right

const prod = product && product.map((curEl , id)=>{
    // category = curEl.category
    // console.log(curEl.category)
    return curEl.category
  })
  
  // ============================================================================================================ right
  // ============================================================================================================ demo

  // const Prodnew = product && product.map((curEl , id)=>{
    
  //   return curEl.category
  // })
  
  
  
  // const newProd = [...new Set(Prodnew)]    ;


  // const ProdFilter = product && product.map((curEl , id)=>{
  //     // if (curEl) {
  //     //   console.log(curEl)
  //     // }

  //     for(let i=0; i<newProd.length; i++){
  //       // console.log(newProd[i])
  //       if(newProd[i] == curEl){
  //         console.log(curEl)
  //         // return curEl
  //       }
  //     }
  // })
  // console.log(ProdFilter)




  // ============================================================================================================ right
  
  // console.log(prod)
  const productNewBrandArr = [...new Set(prod)]    ;
  // console.log('category',productNewBrandArr)




  
  
  // console.log(category);


  useEffect(()=>{
    // dispatch(productReducer())
    dispatch(CategoryReducer(productNewBrandArr))
    dispatch(catReducer())        // ye category fetch kr rha h
    // dispatch(singleCategoryReducer(category))
  // },[dispatch , category ])
  },[dispatch ])




  return (
    <div>
        <NavBar />
        <div className="container m-auto">
          
          
          <Category newCat={productNewBrandArr} />
          <MusicHeroSection />
          <ProductExplore />

         <div className="buttons flex text-center justify-center align-middle mt-7 mb-8    ">
              <NavLink to="/product">  <LargeButton btn="View All Products"/> </NavLink>
         </div>

         <WhyUs />


        </div>
         <div className="imageFooter flex  gap-5 py-11  flex-wrap items-center justify-center mb-12 p-4 md:p-0">
          <ImageFooter1 />
          <ImageFooter2/>
         </div>


        <EmailSection />

        <Footer />

    </div>
  )
}

export default Home
