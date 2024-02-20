// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: {
      
//     },
//   });
  
//   export default store;
  




import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import ProductSlice from "./Slice/ProductSlice";
import UserSlice from "./Slice/UserSlice";

const store = configureStore({
    reducer: {
        userDetails : UserSlice,
        products : ProductSlice,
        cart:CartSlice
    },
  });
  
  export default store;
  
