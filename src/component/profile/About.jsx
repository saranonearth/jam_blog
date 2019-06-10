import React from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
import {verifyEmail} from '../../actions/authAction';

class About extends React.Component  {

state={
    allow: 'no'
}
   
    render(){

    if(!this.state.allow){
    if(!this.props.profile.firstTime) return <Redirect to={`${this.props.match.url}/editprofile`} />}

    return (
        <div>
         
            <div className="container" >
           
                <div className="card yo-card about-card center" style={{marginTop:'10px',marginRight:'-20px',marginLeft:'0'}}>
               
                    <div className="card-contents">
                    
                    <div className="container">
                  {(this.props.auth.emailVerified === false)? (<p className="red-text">Verify your email </p>) : null }
                    <img  className="profile-image" src={this.props.profile.profileImage} alt="profile-img"/>
                        <div className="card-title" style={{fontSize:'22px'}}>{this.props.profile.username}</div>
                        <p style={{width:'50%$'}}>{this.props.profile.bio}</p>
                        <Link to={`${this.props.match.url}/editprofile`}><button  className="btn center black">Edit Profile</button></Link>
                    </div>  
                    {(this.props.auth.emailVerified === false)? ( <button className="black btn" style={{marginTop:'10px'}} onClick={()=>this.props.verifyemail()}>Verify email</button>  ) : null }
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
}


const mapStatetoProps=(state)=>{
  return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

const mapDispatchtoProps=(dispatch)=>{
    return {
        verifyemail: ()=>{
            dispatch(verifyEmail())
        }
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(About)
