import React, { Component } from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types';
import * as types from './actions'
import {bindActionCreators} from 'redux'
import  User from './components/User'


//notes1 创建一个函数，传递state参数，再将mapStateToProps 传递给connect，
const mapStateToProps = (state)=>{
  console.log(state)
  return {
    ctr: state.ctr,
    
  }
}

//notes3 如果actions的方法很多，不可能沿用挨个传递的写法，所以
// 可以全部导出actions 再用bindActionCreators ，绑定全部导出的action和despatch
const mapDespatchToProps=(despatch)=>{
  return bindActionCreators(types,despatch)
}


//装饰器，修改类的行为，用此方法需要安装相应的支持，脚手架本身不支持此写法
@connect(mapStateToProps,mapDespatchToProps)
class App extends Component {

  static propTypes={

    ctr: PropTypes.number
  }

  render() {

    const {increment,decrement} =this.props; // props {ctr: 500, user: "nimabi", increment: ƒ, decrement: ƒ}
    console.log('props', this.props);
    return (
      <div className="container">
        <h1 className="jumbotron-heading text-center">{this.props.ctr}</h1>
        <div className="jumbotron-heading text-center"> {this.props.user}</div>
        <p className="text-center">
          <button onClick={()=>increment()} className="btn btn-primary mr-2" >Increase</button>
          <button onClick={()=>decrement()} className="btn btn-danger my-2">Decrease</button>
        </p>
        <User />
    </div>
    );
  }
}




//notes2 后面的参数属于mapDespatchToPorps，把despatch传递给connect,  表面上来看
// 只需要把actions里面action 导出传进来就能直接从this。props解构出来 方法，再直接绑定点击事件
// export default connect(mapStateToProps,{increment,decrement})(App);


export default App;