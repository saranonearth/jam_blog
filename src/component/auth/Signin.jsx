import React, { Component } from 'react'

export class Signin extends Component {
    render() {
        return (
            <div>
            <div className="container cred-card" style={{width:'50%',position:'absolute',left:'25%'}}>
                <div className="card yo-card about-card card-length" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    <div className="container ">
                    <div className="cred-card-align">
                    <h4 style={{fontFamily:'Abril Fatface',paddingTop:'50px',paddingBottom:'10px'}}>Signin.</h4>
                        <form >
                        <div class="input-field col s12">
                            <input className="auth-input" id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                        </div>  
                          <div class="input-field col s12">
                            <input className="auth-input" id="password" type="password" class="validate"/>
                            <label for="password">Password</label>
                          </div>
                          <button style={{marginBottom:'20px'}}type="submit" className="black btn waves-effect waves-light">Signin</button>
                            
                        </form>
                        <span className="signup-text">New? Signup</span>
                    </div>
                    
                    </div>   
                      
                    </div>
                    
                </div>
            </div>
        </div>

        );
    }
}

export default Signin
