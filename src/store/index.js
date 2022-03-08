import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../reducers/userReducer";

export default configureStore({
    reducer:{
        users:userReducer
    },
    middleware:[...getDefaultMiddleware()]
})