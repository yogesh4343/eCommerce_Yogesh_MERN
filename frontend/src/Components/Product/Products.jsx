import React, { useEffect, useState } from 'react'
import ProductHeader from '../../Assests/ProductHeader'
import SortIcon from '@mui/icons-material/Sort';
import "../Product/Products.css"
// import CategoryColors from './CategoryColors'
// import CategoryRadio from './CategoryRadio'
import Pagination from "react-js-pagination";
import LargeButton from "../../Assests/Buttons/LargeButton"
import ProductCard from '../../Assests/ProductCard'
import {FilterIcon} from "../../Images/filtericon.png"
import EmailSection from '../../Assests/EmailSection/EmailSection'
import Footer from '../../Components/Footer/Footer'
import { brandProductReducer, getSearchReducer, productReducer, resetBtnReducer } from '../../Store/Slice/ProductSlice'
import {  useDispatch, useSelector } from "react-redux";
import BrandRadio from './BrandRadio'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Slider from "@material-ui/core/Slider";
import Loader from '../../Loader/Loader';


const Products = () => {

  // const [newBrand, setNewBrand] = useState("")
  const dispatch = useDispatch() 
  const navigate = useNavigate()
  const param = useParams()
  const [categoryHide , setCategoryHide] = useState(false);
  const [brand , setBrand]= useState("")
  const [ratings, setRatings] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 99999]);
  const [newBrand , newSetBrand]= useState("")
  const {products , brandProducts , getFetchProduct , singleCategory } = useSelector(state=>state.products)
  let {product , status,  productsCount , resultPerPage} = {...products}
  const {product:brandProduct} = {...brandProducts}
  // const[category , setCategory] = useState('Laptop');
  const[category , setCategory] = useState(singleCategory);
  // console.log("productCategory" , singleCategory)
  // const {product:newPro} = {...getFetchProduct}

  
  // console.log(status);

  const keyword = param.id;
  // console.log(brand)
  


  // const productBrandArr = product && product.map((cur,id)=>{
  //   // console.log(`catego` , cur)
  //       return cur.brand
    // })
    // const productNewBrandArr = [...new Set(productBrandArr)];

  const newBrandProduct = brandProduct && brandProduct.map((cur,id)=>{
    // console.log(`catego` , cur)
        return cur.brand
    })
    const productNewBrandArr = [...new Set(newBrandProduct)];

// console.log(productNewBrandArr.length)
    // setNewBrand()



    // const setCurrentPageNo = (e) => {
    //   setCurrentPage(e);      //useState
    //   // console.log(`w`, e) 
    // };

    // console.log(currentPage);




  // const brandArr = brandProduct && brandProduct.map((cur,id)=>{
  //       return cur.brand
  //   })
  //   const newBrandArr = [...new Set(brandArr)];
  //   console.log(newBrandArr);

  // useEffect(()=>{
  //   dispatch(productReducer())
  // },[dispatch ])
// 





const priceHandler = (event, newPrice) => {
  setPrice(newPrice);
};




  const radioBtnFunc = (e)=>{
      setCategory(e)
  }
  // console.log(category);
  // console.log(`brand`,brand);

  const radioFunc =(e)=>{
    dispatch(productReducer())
    navigate('/product')
  }

  const brandBtnFunc=(e)=>{
    setBrand(e)
  }
  
  const brandFunc =(e)=>{
  //   // setCategory('')
    // setCategory(`/api/products`)
    newSetBrand(`/api/products`)
  //   // dispatch(productReducer())
  //   // navigate('/product')
  }


  // resetFunc 
  const resetFunc = ()=>{
    // dispatch(resetBtnReducer())
    // navigate('/')
    window. location. reload(false)
    // navigate('/product')
  }


  const clickHide=()=>{
    categoryHide ? setCategoryHide(false) : setCategoryHide(true)
  }
  
  
  useEffect(()=>{
    // dispatch(productReducer())
    dispatch(brandProductReducer(category , newBrand ))       //ye category s brand kliye   
    dispatch(productReducer(keyword, category , brand ,  ratings , price ,singleCategory , currentPage ))
  },[dispatch ,keyword ,category ,brand , navigate , newBrand  , ratings ,price ,singleCategory , currentPage  ])


  return (
    <>

            <div className="top">
                <ProductHeader />
            </div>


    {/* ==================================== */}
          <div className=" leftRight flex mt-8  mb-12 flex-col sm:flex-row sm:ml-5 ">


        

    {/* ====================================  left */}
           <div className="categoriesContainer w-[12rem]  h-fit flex z-10  flex-wrap md:flex-col md:gap-0 md:w-[20%] absolute sm:sticky sm:bg-transparent ">
 
           <div className="boxCat w-6 h-6 text-xl  cursor-pointer sm:hidden "  onClick={clickHide}>
           {/* <SortIcon classname="text-[4rem]" /> */}
            {/* FilterIcon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="56" viewBox="0 0 16 16"><path fill="currentColor" d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/></svg>
        </div>

         {categoryHide ?  <div className="innerCategory mt-5 p-5 flex w-full flex-col flex-wrap gap-4 justify-evenly bg-[#dedfe2] shadow-2xl rounded-lg sm:hidden  sm:mt-0 ">

       









{/* =========== =========== =========== =========== Category  ===========  */}

          <div className="leftSideCategory  mb-12  ">
               {/* <CategoryRadio category="Category" prod={products}/> */}


               <>
        <span className='category text-lg font-bold  '>    Category -   </span>
                <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' />


                    <form className=" ">
                        <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>radioFunc(e.target.value)} />
                        <label for="All" className=" text-base">All</label>
                        <br />
                        <input id="one" type="radio" name="radios" value="Phones" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)} />
                        <label for="Phones" className=" text-base">Phones</label>
                        <br />
                        {/* <input id="two" type="radio" name="radios" value="Pc" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Pc">Pc</label>
                        <br />  */}
                        <input id="three" type="radio" name="radios" value="Laptop" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Laptop">Laptop</label>
                        <br />
                        <input id="four" type="radio" name="radios" value="Tv"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Tv">Tv</label>
                        <br />
                        <input id="four" type="radio" name="radios" value="Watches"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Watches</label>

                        <br />
                        <input id="four" type="radio" name="radios" value="Tablets"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Tablets</label>

                        <br />
                        <input id="four" type="radio" name="radios" value="Printers"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Printers</label>

                        <span></span>
                    </form>
                        {/* <button onclick={()=>setCategory("")}>Reset</button> */}
    </>



            </div>












{/* =========== =========== =========== =========== Brand  ===========  */}


           <div className="leftSideBrand mb-12 ">
               {/* <BrandRadio  category="Brand" prod={products} /> */}


          <span className='category text-lg font-bold  '>    Brand -   </span>
                  <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' />
                    
  
                      <form className=" ">
                          {/* <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>radioFunc(e.target.value)} />
                          <label for="ALL" className=" text-base">ALL</label> */}

{productNewBrandArr.length == 0 ?
<>
                          {/* <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>brandFunc(e.target.value)} />
                        <label for="All" className=" text-base">All</label>
                          <br /> */}
                          <input id="one" type="radio" name="radios" value="Apple" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)} />
                          <label for="Apple" className=" text-base">Apple</label>
                          <br />
                          <input id="two" type="radio" name="radios" value="Goole" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Goole">Google</label>
                          <br /> 
                          <input id="three" type="radio" name="radios" value="DELL" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="DELL">Dell</label>
                          <br />
                          <input id="four" type="radio" name="radios" value="MAC"  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Tv">Mac</label>
                          <br />
                          <input id="four" type="radio" name="radios" value="LENOVO"  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Tv">Lenovo</label>
                          </>
                        
  : 
  
  <>
                          {/* {brandProduct && brandProduct.map((cur,el)=>{
                           return <div>
                            <input id={el} type="radio" name="radios" value={cur.category}  className="mr-3"  onChange={(e)=>brandBtnFunc(e.target.value)}     />
                          <label for={cur.category}>{cur.category}</label> 
                          </div>
                          })} */}

                          {/* <input id="id" type="radio" name="radios" value=""  className="mr-3"    onChange={(e)=>brandFunc(e.target.value)}    />
                          <label for="All">ALL</label>  */}




                          {productNewBrandArr && productNewBrandArr.map((curEl,id)=>{
                            return <div>
                            <input id={id} type="radio" name="radios" value={curEl}  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}    />
                          <label for={curEl}>{curEl}</label> 
                            </div>
                          })}
</>
                           }

                          {/* {newBrandArr && newBrandArr.map((curEl,id)=>{
                            return <div>
                            <input id={id} type="radio" name="radios" value={curEl}  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}    />
                          <label for={curEl}>{curEl}</label> 
                            </div>
                          })} */}


                            
                          <span></span>
                      </form>
                      {/* <button onclick={()=>setBrand("")}>Reset</button> */}


            </div>







{/* =========== =========== =========== =========== Slider  ===========  */}

<div className="slider">
<span className='category text-lg font-bold  '>    Ratings -   </span>
                  {/* <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' /> */}
                  <br />
<Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
</div>




<br /> <br /> <br />


            {/* =========== =========== =========== =========== price  ===========  */}


<span className='category text-lg font-bold  '>    Prices -   </span>
                  {/* <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' /> */}
                  <br />
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              // max={25000}
              max={99999}
            />






            {/* =========== =========== =========== =========== Color  ===========  */}

            <div className="leftSideColors mb-12  ">
            {/* <CategoryColors  category="Color" color={`#ef5350`}/> */}
            </div>

          






           <div className="reset" onClick={resetFunc} >
                {/* <LargeButton  btn="Reset" /> */}
                <button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
            </div>
          </div>
          
          : null 
          }


          






          {/* ========================================---=-=-=-==-==-=-===-=-==-=-=========================================---=-=-=-==-==-=-===-=-==-=-=  second wala  */}


          <div className="innerCategory p-5  w-full flex-col flex-wrap gap-4 justify-evenly bg-[#dedfe2] shadow-2xl rounded-lg hidden sm:block  ">

       









{/* =========== =========== =========== =========== Category  ===========  */}

          <div className="leftSideCategory  mb-12  ">
               {/* <CategoryRadio category="Category" prod={products}/> */}


               <>
        <span className='category text-lg font-bold  '>    Category -   </span>
                <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' />


                    <form className=" ">
                        <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>radioFunc(e.target.value)} />
                        <label for="All" className=" text-base">All</label>
                        <br />
                        <input id="one" type="radio" name="radios" value="Phones" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)} />
                        <label for="Phones" className=" text-base">Phones</label>
                        <br />
                        {/* <input id="two" type="radio" name="radios" value="Pc" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Pc">Pc</label>
                        <br />  */}
                        <input id="three" type="radio" name="radios" value="Laptop" className="mr-3" onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Laptop">Laptop</label>
                        <br />
                        <input id="four" type="radio" name="radios" value="Tv"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Tv">Tv</label>
                        <br />
                        <input id="four" type="radio" name="radios" value="Watches"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Watches</label>

                        <br />
                        <input id="four" type="radio" name="radios" value="Tablets"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Tablets</label>

                        <br />
                        <input id="four" type="radio" name="radios" value="Printers"  className="mr-3"    onChange={(e)=>radioBtnFunc(e.target.value)}  />
                        <label for="Watcehs">Printers</label>

                        <span></span>
                    </form>
                        {/* <button onclick={()=>setCategory("")}>Reset</button> */}
    </>



            </div>












{/* =========== =========== =========== =========== Brand  ===========  */}


           <div className="leftSideBrand mb-12 ">
               {/* <BrandRadio  category="Brand" prod={products} /> */}


          <span className='category text-lg font-bold  '>    Brand -   </span>
                  <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' />
                    
  
                      <form className=" ">
                          {/* <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>radioFunc(e.target.value)} />
                          <label for="ALL" className=" text-base">ALL</label> */}

{productNewBrandArr.length == 0 ?
<>
                          {/* <input id="one" type="radio" name="radios" value="All" className="mr-3" onChange={(e)=>brandFunc(e.target.value)} />
                        <label for="All" className=" text-base">All</label>
                          <br /> */}
                          <input id="one" type="radio" name="radios" value="Apple" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)} />
                          <label for="Apple" className=" text-base">Apple</label>
                          <br />
                          <input id="two" type="radio" name="radios" value="Goole" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Goole">Google</label>
                          <br /> 
                          <input id="three" type="radio" name="radios" value="DELL" className="mr-3" onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="DELL">Dell</label>
                          <br />
                          <input id="four" type="radio" name="radios" value="MAC"  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Tv">Mac</label>
                          <br />
                          <input id="four" type="radio" name="radios" value="LENOVO"  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}  />
                          <label for="Tv">Lenovo</label>
                          </>
                        
  : 
  
  <>
                          {/* {brandProduct && brandProduct.map((cur,el)=>{
                           return <div>
                            <input id={el} type="radio" name="radios" value={cur.category}  className="mr-3"  onChange={(e)=>brandBtnFunc(e.target.value)}     />
                          <label for={cur.category}>{cur.category}</label> 
                          </div>
                          })} */}

                          {/* <input id="id" type="radio" name="radios" value=""  className="mr-3"    onChange={(e)=>brandFunc(e.target.value)}    />
                          <label for="All">ALL</label>  */}




                          {productNewBrandArr && productNewBrandArr.map((curEl,id)=>{
                            return <div>
                            <input id={id} type="radio" name="radios" value={curEl}  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}    />
                          <label for={curEl}>{curEl}</label> 
                            </div>
                          })}
</>
                           }

                          {/* {newBrandArr && newBrandArr.map((curEl,id)=>{
                            return <div>
                            <input id={id} type="radio" name="radios" value={curEl}  className="mr-3"    onChange={(e)=>brandBtnFunc(e.target.value)}    />
                          <label for={curEl}>{curEl}</label> 
                            </div>
                          })} */}


                            
                          <span></span>
                      </form>
                      {/* <button onclick={()=>setBrand("")}>Reset</button> */}


            </div>







{/* =========== =========== =========== =========== Slider  ===========  */}

<div className="slider">
<span className='category text-lg font-bold  '>    Ratings -   </span>
                  {/* <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' /> */}
                  <br />
<Slider
                value={ratings}
                onChange={(e, newRating) => {
                  setRatings(newRating);
                }}
                aria-labelledby="continuous-slider"
                valueLabelDisplay="auto"
                min={0}
                max={5}
              />
</div>




<br /> <br /> <br />


            {/* =========== =========== =========== =========== price  ===========  */}


<span className='category text-lg font-bold  '>    Prices -   </span>
                  {/* <hr className='w-[70%] my-2 h-2 rounded-lg  bg-[#5b90f2]' /> */}
                  <br />
            <Slider
              value={price}
              onChange={priceHandler}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              min={0}
              // max={25000}
              max={99999}
            />






            {/* =========== =========== =========== =========== Color  ===========  */}

            <div className="leftSideColors mb-12  ">
            {/* <CategoryColors  category="Color" color={`#ef5350`}/> */}
            </div>

          






           <div className="reset" onClick={resetFunc} >
                {/* <LargeButton  btn="Reset" /> */}
                <button type="button" class="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
            </div>
          </div>


          {/* ========================================---=-=-=-==-==-=-===-=-==-=-=========================================---=-=-=-==-==-=-===-=-==-=-= */}

            </div>




            
    {/* ====================================  righ */}
    {status ? 
            <div className="rightSide  w-[80%] flex flex-wrap mb-12 gap-5 z-0 m-auto sm:m-0 justify-center">
    {/* <Loader /> */}

              {/* <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard /> */}


              
            {product && product.map((cur, id)=>{
              {/* console.log(cur) */}
              return <ProductCard key={cur._id} id={cur._id} prod={cur} />
            })}

            </div>

            : 

           <div className="loader flex justify-center align-middle text-center w-full">
              <Loader />   
           </div>


          }



           




        </div> 


        {/* pag */}


        {/* {resultPerPage < productsCount && (

<div className="paginationBox">
  <Pagination
    activePage={currentPage}
    itemsCountPerPage={resultPerPage}
    totalItemsCount={productsCount}
    onChange={setCurrentPageNo}
    nextPageText="Next"
    prevPageText="Prev"
    firstPageText="1st"
    lastPageText="Last"
    itemClass="page-item"
    linkClass="page-link"
    activeClass="pageItemActive"
    activeLinkClass="pageLinkActive"
  />
</div>
)} */}


        <EmailSection />
        <Footer />
    </>
  )
}

export default Products
