import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editProfile} from '../../actions/profileAction';


export class EditProfile extends Component {
    state={
        bio:'',
        file:{},
        img:'https://firebasestorage.googleapis.com/v0/b/react-firebase-a3124.appspot.com/o/profileImg%2FJd4YTgJoAidgCUfz5ht2Eun5TyK2?alt=media&token=8d5d7f8d-915d-432a-bbf7-db77d66b6f8d'
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
    }
    handleBio=(event)=>{
        this.setState({
            bio: event.target.value
        })

    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div>
            <div className="container" >
                <div className="card yo-card about-card center" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <img  className="profile-image" src={this.state.img} alt="edit-img"/>

                        <div className="center container">
                        <div style={{position:'absolute',top:'50%',left:'50%'}} className=" center file-field input-field">
                            <div className="btn">
                                <span>File</span>
                                <input type="file" onChange={this.handleFileUpload}/>
                            </div>
                            <div className="file-path-wrapper">
                                <input style={{width:'0'}} className="file-path validate" type="text"/>
                            </div>
                            </div>
                        </div>
                           
  
  

                        <div className="card-title">{this.props.profile.username}</div>
                        <div className="input-field col s12" style={{marginTop:'0'}}>


                        <h4 style={{paddingTop:'30px',marginBottom:'0',fontSize:'15px'}}>Article content</h4>
                        <textarea value={this.state.bio} id="bio" onChange={this.handleBio} style={{height:'80px'}}  className="materialize-textarea grey-text" required></textarea>
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
        profile: state.firebase.profile
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
