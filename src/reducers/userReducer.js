import { createSlice } from "@reduxjs/toolkit";
import {getUser,getSingleuser} from './../store/actions/userAction'
const userReducer=createSlice({
    name:'user',
    initialState:{
users:[],
user:{},
userconta:[],
loading:false,
errors:{}
    },
    reducers:{
        filteruserdata:(state,action)=>{
            console.log(action)
            state.users=state.userconta.filter(user=>{
             return user.name.toLowerCase().includes(action.payload)   
            })
        }
    },
 extraReducers:{
[getUser.pending]:(state,action)=>{
state.loading=true
},
[getUser.fulfilled]:(state,action)=>{
    state.loading=false
    state.users=action.payload
    state.userconta=action.payload
},
[getUser.rejected]:(state,action)=>{
    state.loading=false
    state.errors=action.payload;
},
//for get single user data
    [getSingleuser.pending]:(state,action)=>{
    state.loading=true
    },
    [getSingleuser.fulfilled]:(state,action)=>{
        state.loading=false
        state.user=action.payload
    },
    [getSingleuser.rejected]:(state,action)=>{
        state.loading=false
        state.errors=action.payload;
    },
}
})
export  const {filteruserdata}= userReducer.actions
export default userReducer.reducer