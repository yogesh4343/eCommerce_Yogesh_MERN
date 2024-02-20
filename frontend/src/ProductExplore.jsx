import React, { useEffect } from 'react'

import Tags from './Assests/Tags'
import CategoryName from "./Assests/CategoryName";
import ProductCard from './Assests/ProductCard';
import FeedBack from './Assests/FeedBack';
import { useDispatch, useSelector } from 'react-redux';
import { featureProductReducer } from './Store/Slice/ProductSlice';
import Loader from './Loader/Loader';


const ProductExplore = () => {

  const dispatch = useDispatch()
  // const products = useSelector(state=>state.products)
  const {featureProduct} = useSelector(state=>state.products)
  // console.log(featureProduct);


  
  
  // const {product , productsCount} = featureProduct
  const {product , status} = featureProduct
  // console.log(product, productsCount);
  
  // console.log(featureProduct);

  useEffect(()=>{
  dispatch(featureProductReducer())
  // },[dispatch , featureProduct ])
  },[dispatch  ])

  
  return (
    <div>
      <div className="container  ">
            
            <div className="tags ml-7 mt-20 ">
            <Tags tag="Our Products" />
          

            <CategoryName category="Explore our Products" />
          
          
          </div>

        {status ? 

          <div className="homeProducts flex flex-row flex-wrap items-center text-center justify-evenly m-auto  md:mx-20 md:mt-11    ">
            {/* <ProductCard id="1"/> */}
            {/* <ProductCard id="1"/> */}


          {/* {featureProduct && featureProduct.map((cur,id)=>{
              return cur.product.map((curEl,i)=>{
                console.log(curEl);
              return <ProductCard key={curEl._id} cur  />
              })
            })} */}


            {product && product.map((cur, id)=>{
              return <ProductCard key={cur._id} id={cur._id} prod={cur} />
            })}
          </div>

          : 
          <Loader />
          }

          <FeedBack />
      </div>
    </div>
  )
}

export default ProductExplore
