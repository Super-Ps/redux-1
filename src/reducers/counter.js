


const counter= (state =500,action={})=>{

        switch(action.type){
            case 'INCREMENT':
                return  state+10
            case 'DECREMENT':
                return  state-1
            default :return state
        
    }
}

export default counter