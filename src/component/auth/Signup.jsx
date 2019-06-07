import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

export class Signup extends Component {
    render() {
        if(this.props.auth.uid) return <Redirect to="/profile/saran"/>
        return (
            <div>
            <div className="container cred-card" style={{width:'50%',position:'absolute',left:'25%'}}>
                <div className="card yo-card about-card card-length-signup" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    <div className="container ">
                    <div className="cred-card-align">
                    <h4 className="signup-txt" style={{fontFamily:'Abril Fatface',paddingTop:'50px',paddingBottom:'10px'}}>Signup.</h4>
                        <form >
                        <div className="input-field col s12">
                            <input className="auth-input" id="username" type="text" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <input className="auth-input validate" id="email" type="email"/>
                            <label htmlFor="email">Email</label>
                        </div>  
                          <div className="input-field col s12">
                            <input className="auth-input validate" id="password" type="password" />
                            <label htmlFor="password">Password</label>
                          </div>
                          <button style={{marginBottom:'20px'}}type="submit" className="black btn waves-effect waves-light">Signup</button>
                            
                        </form>
                        <Link to="/signin"><span className="signup-text black-text">Not new? Signin</span></Link>
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
        auth:state.firebase.auth
    }
}

export default connect(mapStatetoProps)(Signup)
