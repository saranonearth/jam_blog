import React from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
class About extends React.Component  {

state={
    allow: 'no'
}
    componentDidMount(){
        setTimeout(()=> this.setState({allow:''}),3000)
    }
    render(){

    console.log(this.props);


    if(!this.state.allow){
    if(!this.props.profile.firstTime) return <Redirect to={`${this.props.match.url}/editprofile`} />}

    return (
        <div>
         
            <div className="container" >
           
                <div className="card yo-card about-card center" style={{marginTop:'10px',marginRight:'-20px',marginLeft:'0'}}>
               
                    <div className="card-contents">
                    
                    <div className="container">
                  
                    <img  className="profile-image" src={this.props.profile.profileImage} alt="profile-img"/>
                        <div className="card-title" style={{fontSize:'22px'}}>{this.props.profile.username}</div>
                        <p style={{width:'50%$'}}>{this.props.profile.bio}</p>
                        <Link to={`${this.props.match.url}/editprofile`}><button  className="btn center black">Edit Profile</button></Link>
                    </div>     
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

export default connect(mapStatetoProps)(About)
