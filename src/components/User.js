import  React,{ Component} from 'react' ;

import {connect} from 'react-redux'

import  {get_axios} from '../actions';

//const aioxAction =types.get_axios
const mapStateToProps=(state)=>{

    return{
        user:state.user
    }

}


@connect(mapStateToProps,{get_axios})
class User extends Component{

    render(){

        const {get_axios} =this.props

        const {error, loading,user} = this.props.user

        let data

        if(error){
            data= error
        }else if (loading){
            data=" Loading!!!!"
        }else{
            data=user.email
        }

        return(
            <div>
                <h1 className="text-center"> {data}</h1>
                <div className="jumbotron-heading text-center"> </div>
                <p className="text-center">
                    <button onClick={()=>get_axios()} className="btn btn-success mr-2" >Axios  Click</button>
                
                </p>            
            </div>
        )
    }
}



export default User