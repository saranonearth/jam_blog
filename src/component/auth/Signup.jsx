import React, { Component } from 'react'

export class Signup extends Component {
    render() {
        return (
            <div>
            <div className="container cred-card" style={{width:'50%',position:'absolute',left:'25%'}}>
                <div className="card yo-card about-card card-length-signup" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    <div className="container ">
                    <div className="cred-card-align">
                    <h4 className="signup-txt" style={{fontFamily:'Abril Fatface',paddingTop:'50px',paddingBottom:'10px'}}>Signup.</h4>
                        <form >
                        <div class="input-field col s12">
                            <input id="username" type="text" />
                            <label for="username">Username</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                        </div>  
                          <div class="input-field col s12">
                            <input id="password" type="password" class="validate"/>
                            <label for="password">Password</label>
                          </div>
                          <button style={{marginBottom:'20px'}}type="submit" className="black btn waves-effect waves-light">Signup</button>
                            
                        </form>
                        <span className="signup-text">Not new? Signin</span>
                    </div>
                    
                    </div>   
                      
                    </div>
                    
                </div>
            </div>
        </div>

        );
    }
}

export default Signup
