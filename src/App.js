import React, { Component } from 'react';
//import logo from './logo.svg';
import {connect} from 'react-redux'
import { PropTypes } from 'prop-types';


class App extends Component {
  render() {
    return (
      <div className="container">
      <h1 className="jumbotron-heading text-center">{this.props.ctr}</h1>
      <div className="jumbotron-heading text-center"> {this.props.user}</div>
      <p className="text-center">
        <button className="btn btn-primary mr-2" >Increase</button>
        <button className="btn btn-danger my-2">Decrease</button>
      </p>
    </div>
    );
  }
}


const mapStateToProps = (state)=>{

  console.log(state)

  return {

    ctr: state.ctr,
    user:state.user
  }
}

App.propTypes = {
  ctr: PropTypes.number.isRequired
}


export default connect(mapStateToProps)(App);
