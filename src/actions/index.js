import {INCREMENT,DECREMENT} from '../constants';

//user
import {AXIOS_USER_SUCCESS,AXIOS_USER_REQUEST,AXIOS_USER_FAIL} from '../constants'
//import {LOAD_USER}  from '../constants'

import axios from 'axios'

export const  increment =()=>{

    return {
        type:INCREMENT
    }
}

export const  decrement =()=>{

    return {
        type: DECREMENT
    }
}

export const  increment2 =()=>{

    return {
        type:INCREMENT
    }
}

export const  decrement2 =()=>{

    return {
        type: DECREMENT
    }
}



export const get_axios =()=>{

    return  dispatch =>{
        dispatch(axios_request())
        axios.get("https://randomuser.me/api/").then((res)=>
        {
                dispatch( axios_user(res.data.results[0]) )
            }
        )
        .catch(error=>{
           // console.log('error#', error.response.data)
            dispatch(axios_fail(error.response.data));
        })
    }
//redux-promise-middleware 简化action
    // return {
    //     type:LOAD_USER,
    //     payload: axios.get("https://randomuser.me/api/")
    // }
}


export const axios_request =()=>{
    return{
    type:AXIOS_USER_REQUEST
    }
}



export const axios_user = (user)=>{
    return {
        type:AXIOS_USER_SUCCESS,
        user
    }
}

export const axios_fail = (error)=>{
    return {type:AXIOS_USER_FAIL,
        error
    }
}