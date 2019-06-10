import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editProfile} from '../../actions/profileAction';


export class EditProfile extends Component {
    state={
        bio:this.props.profile.bio,
        file:{},
        img:'https://firebasestorage.googleapis.com/v0/b/react-firebase-a3124.appspot.com/o/profileImg%2Fimage%20(2).jpg?alt=media&token=905f0caf-cf5f-4a2a-88a5-70b7086991bd'
    }

    componentDidMount(){
        this.setState({img: this.props.profile.profileImage})
    }

    handleFileUpload=(event)=>{
        this.setState({
            file: event.target.files[0]
        })
    }
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.save(this.state)
        this.setState({
            bio:'',
            file:{}
        })
        this.props.history.push(`/profile/${this.props.auth.uid}`)
    }
    handleBio=(event)=>{
        this.setState({
            bio: event.target.value
        })

    }
    render() {
        
        return (
            <div>
                <div>
            <div className="container" >
                <div className="card yo-card about-card center edit-profile-card" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <img  className="profile-image" src={this.state.img} alt="edit-img"/>

          
                        <div style={{position:'absolute',top:'40%',left:'50%'}} className=" center file-field input-field">
                            <div className="btn black logout-btn change-btn">
                                <span className="change-btn-font">Edit</span>
                                <input type="file"  onChange={this.handleFileUpload}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input style={{width:'0'}} className="file-path validate" type="text"/>
                            </div>
                            </div>
                 
                           
  
  

                        <div className="card-title">{this.props.profile.username}</div>
                        <div className="input-field col s12" style={{marginTop:'0'}}>


                        <h4 style={{paddingTop:'10px',marginBottom:'0',marginTop:'0px',fontSize:'15px'}}>Bio</h4>
                        <textarea value={this.state.bio} id="bio" onChange={this.handleBio}  className="materialize-textarea grey-text" required></textarea>
                        </div> 
                        
                        
                        <button style={{margin:'20px 20px'}} className="btn black">Save</button>
                        </form>
                    </div>     
                    </div>
                </div>
            </div>
        </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) =>{
    return {
        profile: state.firebase.profile,
        auth: state.firebase.auth
    }
}
const mapDispatchtoProps=(dispatch)=>{
    return{
        save: (details)=>{
            dispatch(editProfile(details))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(EditProfile)
