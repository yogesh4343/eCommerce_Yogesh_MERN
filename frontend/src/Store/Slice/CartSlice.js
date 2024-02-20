import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartDetails:{
            cartItems: localStorage.getItem("ecommerce_cart_self") ? JSON.parse(localStorage.getItem("ecommerce_cart_self")) : []
        },
        shippingInfo : localStorage.getItem("ecommerce_shipping_self") ? JSON.parse(localStorage.getItem("ecommerce_shipping_self")) : {},
        newGetProductData:[],
        status: STATUS.ERROR,
    },
    reducers:{
        getStatus(state,action){
            state.status = action.payload
        },
        getProductData(state, action){
            // let newPro = []
            // newPro.push(action.payload)
            // console.log(newPro)

            state.cartDetails.cartItems.push(action.payload)
        },
        getRemoveData(state, action){
            state.cartDetails.cartItems = action.payload;
        },
        getShippingInfo(state, action){
            state.shippingInfo = action.payload
        }
       

    }
})

export default cartSlice.reducer;

export const {getStatus  ,getProductData, getRemoveData , newGetProductData , getShippingInfo} = cartSlice.actions



// /addCart    ( /api/register )

export function addToCartReducer(idx , quantity){
    // console.log(id , quantity)
    return async function addToCartReducerThunk(dispatch , getState) {



        // let arrayPro = getState().cart.cartDetails.cartItems
        // console.log(arrayPro)
        // let filterArr = arrayPro.filter((curEl , id)=>{
        //     return curEl.product ==  idx;
        // })
        
        // let redArr =    filterArr.reduce((acc , current)=>{
        //     return acc + current.quantity
        // },0);
        // console.log(redArr)




        dispatch(getStatus(STATUS.LOADING))
        try{
            const {data} = await axios.get(`/api/product/${idx}`)
            // console.log('cart' , data);

            dispatch(
                getStatus(STATUS.IDLE),
            )

            dispatch(
                getProductData({
                        product : data.product._id,
                        name : data.product.name,
                        price : data.product.price,
                        image : data.product.images[0].url,
                        stock : data.product.Stock,
                        category: data.product.category,
                        quantity
                    }),


            )
            localStorage.setItem('ecommerce_cart_self' , JSON.stringify(getState().cart.cartDetails.cartItems))



        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}


// newAddToCartReducer =======================================================================================================
export function newAddToCartReducer(idx , quantity){
    // console.log(idx , quantity)
    return async function newAddToCartReducerThunk(dispatch , getState) {



        let arrayPro = getState().cart.cartDetails.cartItems
        // console.log(arrayPro)
        let filterArr = arrayPro.filter((curEl , id)=>{
            return curEl.product ==  idx;
        })
        
        let redArr =    filterArr.reduce((acc , current)=>{
            return acc + current.quantity
        },0);
        // console.log(redArr)




       
                // newGetProductData({}),


            // localStorage.setItem('ecommerce_cart_self' , JSON.stringify(getState().cart.cartDetails.cartItems))



    }
}



// /removeCart    ( /api/admin/product/ )

export function removeToCartReducer(idx ){
    // console.log(id , quantity)
    return async function removeToCartReducerThunk(dispatch , getState) {

        let arrayPro = getState().cart.cartDetails.cartItems
        // console.log(arrayPro)
        let filterArr = arrayPro.filter((curEl , id)=>{
            // console.log(curEl.product , idx)
            return curEl.product !== idx
        })
        // console.log(filterArr)

        dispatch(getRemoveData(filterArr))

        dispatch(getStatus(STATUS.LOADING))
        
            localStorage.setItem('ecommerce_cart_self' , JSON.stringify(getState().cart.cartDetails.cartItems))

       
    }
}







// slippi

export function ShippingReducer(data){
    // console.log(`remove func` ,id , obj)
        return async function ShippingThunk(dispatch , getState){
            dispatch(getStatus(STATUS.LOADING))
            try{
               
                dispatch(getShippingInfo(data))

                localStorage.setItem('ecommerce_shipping_self' , JSON.stringify(data));

            }catch(error){
                dispatch (getStatus(STATUS.ERROR))
            }
        }
    }




