import React from 'react';
import {connect} from 'react-redux';
import {Link,Redirect} from 'react-router-dom';
class About extends React.Component  {

    render(){
    const profileImg = "http://placehold.jp/200x200.png";
    console.log(this.props);
    if(!this.props.profile.firstTime) return <Redirect to={`${this.props.match.url}/editprofile`} />
    return (
        <div>
            <div className="container" >
                <div className="card yo-card about-card center" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="container">
                    
                    <img  className="profile-image" src={profileImg} alt="profile-img"/>
                        <div className="card-title">{this.props.profile.username}</div>
                        <p style={{width:'50%$'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum odit, illo aliquam facere a sapiente, laborum adipisci amet atque nisi dignissimos? Optio, magnam possimus ipsam beatae dolores culpa consequuntur totam.</p>
                        <Link to={`${this.props.match.url}/editprofile`}><button style={{margin:'20px 20px'}} className="btn black">Edit Profile</button></Link>
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
