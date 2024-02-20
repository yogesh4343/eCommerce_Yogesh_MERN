import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import EmailSection from '../../Assests/EmailSection/EmailSection'
import NavBar from '../../Assests/NavBar/NavBar'
import Loader from '../../Loader/Loader'
import { addToCartReducer, newAddToCartReducer } from '../../Store/Slice/CartSlice'
import { getSingleProductReducer } from '../../Store/Slice/ProductSlice'
import Footer from '../Footer/Footer'

const SingleProduct = () => {

    const dispatch = useDispatch()
    const param = useParams()
    // const [cartArray, setCartArray ] = useState([])
    const [quantity,setQuantity] = useState(1);
    const {singleProduct} = useSelector(state=>state.products)
    const {product , status} = {...singleProduct}
    
    // const {Stock , brand , category , colors , createdAt , description , feature , images , model , name , newArrivals , numOfReviews , price , rating , reviews , user ,_id} = {...product}
    const {Stock , description  , images  , name  , numOfReviews , price  ,_id} = {...product}

    // api/product/6543889613beccb18236cf57
    
    // const cartProduct = {
    //     product , quantity
    // }

    // console.log(status);

    let discount =  10/100*price
    let newDiscount =  price - discount

    
    // const {} = {...images}
    const {0:newUrl} = {...images}
    const {url} = {...newUrl}
    // console.log(url);

    // const {0:one} = {...images}
    // const img = {...one}
    // console.log(img.url)
    // const img = {...{...images}[0]}

    // const[changeImage , setChangeImage] = useState("https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692846363993")
    const[changeImage , setChangeImage] = useState("")




    if(Stock>1){
        
    }


    // addToCartFun
    const addToCartFunc = ()=>{
        // console.log(`addToCartFunc` , product)
        // setCartArray((prev)=>{
        //     return [...prev , product]
        // })
        // dispatch(addToCartReducer(product));
        dispatch(addToCartReducer(_id, quantity ));
        dispatch(newAddToCartReducer(_id, quantity ));
    }
    // console.log(cartArray);


    // changing i,ahe 

    const changeImageFunc = (w)=>{
        // console.log('change Image func' , w)
        setChangeImage(url)
        setChangeImage(w)
    }



    useEffect(()=>{

        dispatch(getSingleProductReducer(param.id))
        setChangeImage(url)
    },[dispatch , url , param])




    // let stock = 10;
    // let stock = 0;


    // const [quantity,setQuantity] = useState(Stock);

    const increaseQuantity = () => {
        // if (stock <= quantity) return;
        if (Stock <= quantity) return;
    
        const qty = quantity + 1;
        setQuantity(qty);
      };
    
      const decreaseQuantity = () => {
        if (1 >= quantity) return;
    
        const qty = quantity - 1;
        setQuantity(qty);
      };

    // console.log(quantity)



  return (
    <>
        <NavBar />



        {status ? 

        <div className="product z-0">
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 z-0 ">
                    <div className="sticky top-0 z-50 overflow-hidden ">
                        <div className="relative mb-6 sm:h-[32rem] ">
                            {/* <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt="" */}
                            <img src={changeImage} alt="pro"
                                className="object-cover w-full lg:h-full " />
                        </div>
                        <div className="flex-wrap flex md:flex ">
                            {/* <div className="w-1/2 p-2 sm:w-1/4">
                                <div 
                                    className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </div>
                            </div> */}
                            {/* <div className="w-1/2 p-2 sm:w-1/4">
                                <span
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </span>
                            </div> */}
                            {/* <div className="w-1/2 p-2 sm:w-1/4">
                                <span
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </span>
                            </div> */}
                            {/* <div className="w-1/2 p-2 sm:w-1/4">
                                <span
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                        className="object-cover w-full lg:h-20" />
                                </span>
                            </div> */}


                            {images && images.map((cur,ind)=>{
                                    {/* console.log(cur); */}
                                return <div key={ind} className="w-1/2 p-2 sm:w-1/4">
                                <span
                                    className="block border border-transparent dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                    <img src={cur.url} alt=""
                                        className="object-cover w-full lg:h-20" onClick={(e)=>changeImageFunc(e.target.src)}/>
                                </span>
                            </div>
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                                {name}</h2>
                            <div className="flex items-center mb-6">
                                <ul className="flex mr-2">
                                    <li>
                                        {/* <a href="#"> */}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li>
                                        {/* <a href="#"> */}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li>
                                        {/* <a href="#"> */}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </span>
                                    </li>
                                    <li>
                                        {/* <a href="#"> */}
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor"
                                                className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        {/* </a> */}
                                        </span>

                                    </li>
                                </ul>
                                <p className="text-xs dark:text-gray-400 ">({numOfReviews} customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                                {description}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                                <span>₹ {newDiscount}</span>
                                <span
                                    // className="text-base font-normal text-gray-500 line-through dark:text-gray-400">₹ 1500.99</span>
                                    className="text-base font-normal text-gray-500 line-through dark:text-gray-400">₹ {price}</span>
                            </p>
                            <p className="text-green-600 dark:text-green-300 ">{Stock} in stock</p>
                        </div>
                        {/* <div className="flex items-center mb-8">
                            <h2 className="w-16 mr-6 text-xl font-bold dark:text-gray-400">
                                Colors:</h2>
                            <div className="flex flex-wrap -mx-2 -mb-2">
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                                    <div className="w-6 h-6 bg-cyan-300"></div>
                                </button>
                                <button
                                    className="p-1 mb-2 mr-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-green-300 "></div>
                                </button>
                                <button
                                    className="p-1 mb-2 border border-transparent hover:border-blue-400 dark:border-gray-800 dark:hover:border-gray-400">
                                    <div className="w-6 h-6 bg-red-200 "></div>
                                </button>
                            </div>
                        </div> */}
                        
                        


                        <div className="w-32 mb-8 ">
                            <label htmlFor=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400" onClick={()=>decreaseQuantity()}   >
                                    <span className="m-auto text-2xl font-thin" >-</span>
                                </button>

                                <input type="text"
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    // placeholder="1" />
                                     placeholder={quantity} /> 

                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400" onClick={()=>increaseQuantity()} >
                                    <span className="m-auto text-2xl font-thin" >+</span>
                                </button>
                            </div>
                        </div>


                        {/* <button className='w-20 h-full text-gray-600 ' onClick={decreaseQuantity} > -</button>
                        {quantity}
                        <button className='w-20 h-full text-gray-600 ' onClick={increaseQuantity} > +</button> */}



                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <NavLink to="/addtocart">
                                 <button
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300" onClick={()=>addToCartFunc()} >
                                    Add to Cart
                                </button>
                                </NavLink>
                            </div>
                            <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                {/* <button
                                    className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                    Add to wishlist
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
        </div>

        :
        <div className="loader flex justify-center align-middle text-center w-full h-full m-auto mt-64">
        <Loader /> 
           </div>


    }


        <EmailSection />
        <Footer />
    </>
  )
}

export default SingleProduct
