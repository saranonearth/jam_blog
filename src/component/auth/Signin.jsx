import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {signIn} from '../../actions/authAction';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


export class Signin extends Component {
    state={
        email:'',
        password:''
    }

    changeHandle=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    submitHandle=(e)=>{
        e.preventDefault();
        this.props.signin(this.state);
    }


    render() {
        if(this.props.auth.uid) return <Redirect to={`profile/${this.props.auth.uid}`}/>
        return (
            <div>
            <div className="container cred-card" style={{width:'50%',position:'absolute',left:'25%'}}>
                <div className="card yo-card about-card card-length" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    <div className="container ">
                    <div className="cred-card-align">
                    <h4 style={{fontFamily:'Abril Fatface',paddingTop:'50px',paddingBottom:'10px'}}>Signin.</h4>
                        <form onSubmit={this.submitHandle}>
                   
                        {(this.props.authError)? <p className="red-text">{this.props.authError.code}</p>:null}
                        <div className="input-field col s12">
                            <input onChange={this.changeHandle} className="auth-input validate" id="email" type="email" />
                            <label htmlFor="email">Email</label>
                        </div>  


                          <div className="input-field col s12">
                            <input onChange={this.changeHandle} className="auth-input validate" id="password" type="password" />
                            <label htmlFor="password">Password</label>
                          </div>


                          <button style={{marginBottom:'20px'}}type="submit" className="black btn waves-effect waves-light">Signin</button>
                            
                        </form>
                       <Link to="/signup"><span className=" black-text signup-text">New? Signup</span></Link> 
                    </div>
                    
                    </div>   
                      
                    </div>
                    
                </div>
            </div>
        </div>

        );
    }
}

const mapStatetoProps=(state)=>{
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        signin: (cred)=>{dispatch(signIn(cred))}
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Signin)
