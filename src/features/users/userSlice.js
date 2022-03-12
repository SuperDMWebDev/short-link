import {createSlice} from '@reduxjs/toolkit'

export default createSlice({
    name:'user',
    initialState:{
        //user va token gia tri mac dinh ban dau 
        // la neu nhu co du lieu duoc luu trong
        //
        user:JSON.parse(localStorage.getItem('user'))?
        JSON.parse(localStorage.getItem('user')):null,
        token:JSON.parse(localStorage.getItem('token'))?
        JSON.parse(localStorage.getItem('token')):null
    },
    reducers:{
        login:(state,action)=>{
            // lay info la ten user, lay accessToken la token 
            console.log(action);
            console.log(state.user);
            //action co  type la user/login
            //action.payload=res.data   
            state.user=action.payload.info
            state.token=action.payload.accessToken
        },
        logout:(state,action)=>{
            state.user=null
            state.token=null
        }
    }

})