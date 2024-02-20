import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios"

export const STATUS = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    // PRODUCT_DETAILS_REQUEST,
    // PRODUCT_DETAILS_SUCCESS,
    // PRODUCT_DETAILS_FAIL,
});

const productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        brandProducts:[],
        categoryProduct:[],
        singleCategory:"",
        addProduct:[],
        featureProduct:[],
        singleProduct:{},
        getFetchProduct:[],
        getCategory:{}
        // searchProduct:[]
    },
    status: STATUS.IDLE,


    reducers:{

        getStatus(state,action){
            state.status = action.payload
        },
        getProducts(state, action){
            state.products = action.payload
        },
        getAddProduct(state, action){
            // state.addProduct = action.payload
            state.addProduct.push(action.payload)
            
        },
        getFeatureProduct(state, action){
            // state.featureProduct.push(action.payload)
            state.featureProduct = action.payload
        },
        getSingleProduct(state, action){
            // state.featureProduct.push(action.payload)
            state.singleProduct = action.payload
        },
        getBrandProducts(state,action){
            state.brandProducts = action.payload
            // state.products = action.payload
        },
        getCategoryProducts(state,action){
            state.categoryProduct = action.payload
        },
        newFetchProduct(state,action){
            state.getFetchProduct = action.payload
            state.featureProduct = action.payload
            state.products = action.payload
        },
        getSingleCategory(state,action){
           state.singleCategory = action.payload
        },
        getCategories(state,action){
            state.getCategory = action.payload
        }
       

    }
})

export default productSlice.reducer;

export const {getStatus,  getProducts , getAddProduct , getFeatureProduct , getSingleProduct , getSearchProduct , getBrandProducts , getCategoryProducts, newFetchProduct , getSingleCategory , getCategories} = productSlice.actions




// export  function productReducer(){
//     // console.log(category);
//         return async function productThunk(dispatch , action){
//             dispatch(getStatus(STATUS.LOADING))

//             try{
//                 const {data} = await axios.get('/api/products')
//                 // console.log(data);


//                 dispatch(getStatus(STATUS.IDLE));
//                 dispatch(getProducts(data))
                
//             }catch (err) {  
//                 dispatch(getStatus(STATUS.ERROR));
//             }
//         }

// }

export  function singleCategoryReducer(category){
    // console.log(category);
        return async function singleCategoryThunk(dispatch , action){

                dispatch(getSingleCategory(category));
                
        }

}



export  function brandProductReducer(categoryForBrand , newBrand=""){
    // console.log(newBrand);
        return async function productThunk(dispatch , action){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let link = `/api/products?category=${categoryForBrand}`
                    // const {data} = await axios.get('/api/products')
                    
                    if(newBrand){
                        link = newBrand
                    }
                    
                    const {data} = await axios.get(link)
                    // console.log(data);

                dispatch(getStatus(STATUS.IDLE));
                dispatch(getBrandProducts(data))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}
export  function CategoryReducer(categoryForBrand ){
    // console.log(`reducer`,scategoryForBrand);
        return async function categoryThunk(dispatch , action){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let link = `/api/products?category=${categoryForBrand}`
                    // const {data} = await axios.get('/api/products')
                    
                    const {data} = await axios.get(link)
                    // console.log(`reducer`,data);

                dispatch(getStatus(STATUS.IDLE));
                // dispatch(getProducts(data))
                dispatch(getBrandProducts(data))
                dispatch(newFetchProduct(data))
                dispatch(getProducts(data))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}

export  function catReducer( ){
    // console.log(categoryForBrand);
        return async function categoryThunk(dispatch , action){
            dispatch(getStatus(STATUS.LOADING))

            try{
                let link = `/api/products`
                    // const {data} = await axios.get('/api/products')
                    
                    const {data} = await axios.get(link)
                    // console.log(data);

                dispatch(getStatus(STATUS.IDLE));
                // dispatch(getProducts(data))
                dispatch(getCategoryProducts(data))
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}



// export  function productReducer(keyword="" , category="" , brand="" , currentPage = 1 ,  ratings=0 ,  price=[0,99999]){
export  function productReducer(keyword="" , category="" , brand=""  ,  ratings=0 ,  price=[0,99999]){

    // console.log(`currentPage`,currentPage);
    // console.log(`keyword`,keyword ,`category` , category, `brand`, brand);

    return async function productThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        // let link = `/api/products`

            // let link =  `/api/products?keyword=${keyword}`
            let link =  `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}`
            
            if(category){
            //  link =  `/api/products?keyword=${keyword}&category=${category}`
             link =  `/api/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}`

            }
            if(brand){
                // link =  `/api/products?brand=${brand}`
            //  link =  `/api/products?keyword=${keyword}&brand=${brand}`
             link =  `/api/products?keyword=${keyword}&brand=${brand}&price[gte]=${price[0]}&price[lte]=${price[1]}`

            }
            if(category && brand){
                // link =  `/api/products?brand=${brand}`
            //  link =  `/api/products?keyword=${keyword}&category=${category}&brand=${brand}`
             link =  `/api/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&brand=${brand}`

            }
            if (ratings){
                // link =  `/api/products?keyword=${keyword}&ratings[gte]=${ratings}`
                link =  `/api/products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
            }
            if (ratings && category){
                // link =  `/api/products?keyword=${keyword}&category=${category}&brand=${brand}&ratings[gte]=${ratings}`


                // link =  `/api/products?keyword=${keyword}&category=${category}&ratings[gte]=${ratings}`
                link =  `/api/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`
            }
            if (ratings && category && brand){
                // link =  `/api/products?keyword=${keyword}&category=${category}&brand=${brand}&ratings[gte]=${ratings}`
                link =  `/api/products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&brand=${brand}&ratings[gte]=${ratings}`
            }


            try{
                // const {data} = await axios.get('/api/products')
                const {data} = await axios.get(link)
                // console.log('prodct',data);


                dispatch(getStatus(STATUS.IDLE));
                dispatch(getProducts(data))
               
                
            }catch (err) {  
                dispatch(getStatus(STATUS.ERROR));
            }
        }

}



// reset btn 
// export  function resetBtnReducer(categoryForBrand , newBrand=""){
//     console.log(newBrand);
//         return async function resetBtnThunk(dispatch , action){
//             dispatch(getStatus(STATUS.LOADING))

//             try{
//                 let link = `/api/products`
//                     // const {data} = await axios.get('/api/products')
                    
//                     const {data} = await axios.get(link)
//                     // console.log(data);

//                 dispatch(getStatus(STATUS.IDLE));
//                 dispatch(getProducts(data))
                
//             }catch (err) {  
//                 dispatch(getStatus(STATUS.ERROR));
//             }
//         }

// }







// addProduct 



export  function addProductDatabaseReducer(productObj){
    // console.log(productObj)
    return async function addProductThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        try{
            const {data} = await axios.post('/api/admin/product/new' ,productObj)
            // console.log(`addpc` , data.product);


            dispatch(getStatus(STATUS.IDLE));
            dispatch(getAddProduct(data))
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}




// getProduct

export  function featureProductReducer(){
    return async function getProductThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        try{
            const {data} = await axios.get('/api/products?feature=true'  )
            // console.log(`addpc` , data.product);


            dispatch(getFeatureProduct(data))
            dispatch(getStatus(STATUS.IDLE));
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}







// getSingleProdById


export  function getSingleProductReducer(ind){
    return async function getSingleProductThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        try{
            const {data} = await axios.get(`/api/product/${ind}`  )
            // console.log(`addpc` , data);


            dispatch(getSingleProduct(data))
            dispatch(getStatus(STATUS.IDLE));
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}



// getSearch


export  function getSearchReducer(keyword){
    // console.log(searchCont)
    return async function getSingleSearchThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        let link = `/api/products?keyword=${keyword}`


        // if(keyword){
        //     // link =  `/api/products?keyword=${keyword}`
        //  }


        // let newLink = `/api/products?keyword=${keyword}`
        try{
            const {data} = await axios.get(link);
            // console.log(`addpc` , data);



            dispatch(getProducts(data))
            dispatch(getStatus(STATUS.IDLE));
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}


// getCategory


// export  function getCategoryhReducer(category){
//     // console.log(category)
//     return async function getCategoryThunk(dispatch , action){
//         dispatch(getStatus(STATUS.LOADING))

//         let link = `/api/products?category=${category}`
//         try{
//             const {data} = await axios.get( link );
//             // console.log(`addpc` , data);


//             dispatch(getProducts(data))
//             dispatch(getStatus(STATUS.IDLE));
            
//         }catch (err) {  
//             dispatch(getStatus(STATUS.ERROR));
//         }
//     }

// }


// getBrand


export  function getBrandReducer(brand){
    // console.log(category)
    return async function getBrandThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        let link = `/api/products?brand=${brand}`
        try{
            const {data} = await axios.get( link );
            // console.log(`addpc` , data);


            dispatch(getProducts(data))
            dispatch(getStatus(STATUS.IDLE));
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}



// getSIngleCategory 
export  function getCategoryReducer(category){
    // console.log(category)
    return async function getCategoeyThunk(dispatch , action){
        dispatch(getStatus(STATUS.LOADING))

        let link = `/api/products?category=${category}`
        try{
            const {data} = await axios.get( link );
            // console.log(`addpc` , data);


            dispatch(getCategories(data))
            dispatch(getStatus(STATUS.IDLE));
            
        }catch (err) {  
            dispatch(getStatus(STATUS.ERROR));
        }
    }

}


