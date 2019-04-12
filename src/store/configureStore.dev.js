import {createStore,applyMiddleware} from 'redux';
import rootReducer from '../reducers';
//import {Provider} from 'react-redux';
import  reduxlogger from 'redux-logger'; // 第三方做的比较好的中间件
import thunk from 'redux-thunk' ;
//import promise from 'redux-promise-middleware'; // 6.1版本报错了 未解决,
import {composeWithDevTools} from 'redux-devtools-extension'


const configureStore = (preloadedState) => {
    const store = createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(reduxlogger, thunk, ))
    );
  
    return store;
  };
  
export default configureStore;