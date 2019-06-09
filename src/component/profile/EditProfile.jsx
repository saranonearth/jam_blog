import React, { Component } from 'react'
import {connect} from 'react-redux';
import {editProfile} from '../../actions/profileAction';

export class EditProfile extends Component {
    state={
        bio:'',
        file:{}
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
        return (
            <div>
                <div>
            <div className="container" >
                <div className="card yo-card about-card center" style={{marginTop:'30px'}}>
                    <div className="card-contents">
                    
                    <div className="container">
                    <form onSubmit={this.handleSubmit}>
                    <img  className="profile-image" src="" alt="profile-img"/>

                            <div class="file-field input-field">
                            <div class="btn">
                                <span>File</span>
                                <input type="file" onChange={this.handleFileUpload}/>
                            </div>
                            <div class="file-path-wrapper">
                                <input style={{width:'0'}} class="file-path validate" type="text"/>
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
