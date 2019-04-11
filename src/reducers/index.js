import { combineReducers }  from 'redux';
import ctr from './counter'
import user from './user'




 const rootReducer =  combineReducers({
    ctr,
    user
 })

 export default rootReducer