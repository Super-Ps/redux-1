import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

//import {createStore,applyMiddleware} from 'redux';
//import rootReducer from './reducers';
import {Provider} from 'react-redux';
//import  reduxlogger from 'redux-logger'; // 第三方做的比较好的中间件
//import thunk from 'redux-thunk' ;
//import promise from 'redux-promise-middleware'; // 6.1版本报错了 未解决,
//import {composeWithDevTools} from 'redux-devtools-extension'

import configureStore from './store/configureStore'


// 自定义中间件
// const Logger= store=>next=>action=>{
//     console.log('dispatch',action)
//     let result =next(action); // 控制权交给下个中间件
//     console.log('next state', store.getState())

//     return result
// }


//const store = createStore(rootReducer,composeWithDevTools( applyMiddleware(reduxlogger,thunk)))

const store=configureStore();

//store.subscribe(()=> console.log("state update",store.getState()))

// store.dispatch({
//     type:"INCREMENT"
// })


// store.dispatch({
//     type:"INCREMENT"
// })

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.getElementById('root')
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
