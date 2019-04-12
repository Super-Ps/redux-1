import  {AXIOS_USER_SUCCESS, AXIOS_USER_REQUEST, AXIOS_USER_FAIL} from '../constants'

const initialState = {

    loading:false,
    error :null,
    user:{}
}

const user= (state=initialState, action={} )=>{

   // console.log('state', state)

    switch (action.type){
        
        case AXIOS_USER_SUCCESS:
            return {
                loading:false,
                error:null,
                user:action.user
            }
        case AXIOS_USER_REQUEST:
            return {
                loading:true,
                error:null,
                user:{}
            }
            case AXIOS_USER_FAIL:
                return {
                    loading:false,
                    error:action.error,
                    user:{}
                }
        default : return state
}
}


export default user;