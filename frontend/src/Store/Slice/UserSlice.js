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

const userSlice = createSlice({
    name:"user",
    initialState:{
        status: STATUS.ERROR,
        userDetail:{},
        // loadUser:{},
        loadUser : localStorage.getItem("eCommerceUser")? JSON.parse(localStorage.getItem("eCommerceUser")) : {},
        insertUser:{},
        logout:{},
        updateFunc:{}
    },
    reducers:{
        

        getStatus(state,action){
            state.status = action.payload
        },
        getUserDetail(state, action){
            // state.userDetail = action.payload
            // state.loadUser = action.payload
            state.loadUser = action.payload;
        },
        getInsertUser(state, action){
            state.insertUser = action.payload
        },
       
        getLoadUser(state,action){
            state.loadUser = action.payload
        },
        getUpdateFunc(state, action){
            // state.updateFunc = action.payload
            state.loadUser = action.payload
        },
        getLogOut(state, action){
            // state.logout = action.payload
            // state.loadUser = action.payload
            state.loadUser = {}
        },
        getUpdateProfile(state, action){
            // state.updateProfile = action.payload
            state.userDetail = action.payload
        },

    }
})

export default userSlice.reducer;

export const {getStatus,  getUserDetail , getInsertUser , getLogOut , getLoadUser , getUpdateFunc, getUpdateProfile} = userSlice.actions







// /login user 

export function loginReducer(email , password){
    return async function loginThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        const config = { headers : { "Content-Type" : "application/json"}};
        try{

            
            const {data} = await axios.post(`/api/login`, { email , password} , config)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUserDetail(data),
            )
            localStorage.setItem("eCommerceUser" , JSON.stringify(data));
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}





// /register user   ( /api/register )

export function registerReducer(obj){
    return async function loginThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        // const config = { headers : { "Content-Type" : "application/json"}};
        try{

            
            const {data} = await axios.post(`/api/register`, obj)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getInsertUser(data),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}


// get single user beacuse hum registr krke logn krenge to refresh krne pr state redux m clear ho jayega , refresh krke bhi login rkhe k liye backend m ek code likhna padega (isAuthenticate) krne padega , phr yaha code krna 



export function getLoadUserReducer(){
    return async function getLoadUserThunk(dispatch , thunk) {
        
        dispatch(getStatus(STATUS.LOADING))
        
        // const config = { headers : { "Content-Type" : "application/json"}};
        try{
            // console.log(`iner User`)

            
            const {data} = await axios.get(`/api/me`)
            // console.log(`singleMe` , data );
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getLoadUser(data),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}





// /logout user   ( /api/logout )

export function logOutReducer(){
    console.log(`logOutReducer`);
    return async function logOutThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        // const config = { headers : { "Content-Type" : "application/json"}};
        try{
            const {data} = await axios.post(`/api/logout`)
            console.log(data)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getLogOut(data)
            )
            localStorage.removeItem("eCommerceUser");
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}



// /update user   ( /api/logout )

export function UpdateReducer(myForm){
    console.log(myForm);
    return async function UpdateThunk(dispatch , thunk) {

        dispatch(getStatus(STATUS.LOADING))

        // const config = { headers : { "Content-Type" : "multipart/form-data"}};
        const config = { headers : { "Content-Type" : "application/json"}};
        try{
            const {data} = await axios.put(`/api/me/update` ,myForm,config)
            //  await axios.put(`/api/me/update` ,cont, config)
            console.log(data);
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUpdateFunc(data)
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR))
        }
    }
}



// async =====  ==  Update PRofile password

export function UpdatePasswordReducer(passwords){
    // console.log(`UpdatePasswordReducer` , passwords)
    return async function getUpdatePasswordThunk(dispatch , getState){
        dispatch(getStatus(STATUS.LOADING))
        try{
            // const {data} = await axios.get(`/api/v1/product/${id}`)
            // console.log(data)


            const config = { headers : { "Content-Type" : "application/json"}};

            const {data} = await axios.put(`/api/password/update`, passwords , config)
            console.log(data)
            dispatch(
                getStatus(STATUS.IDLE),
            )
            dispatch(
                getUpdateProfile(data),
            )
        }catch(error){
            dispatch (getStatus(STATUS.ERROR));
        }
    }
}




