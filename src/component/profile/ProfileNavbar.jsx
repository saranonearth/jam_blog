import React from 'react'
import {NavLink,Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../../actions/authAction';

const ProfileNavbar = (props) => {
        console.log(props.profile)
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                <span><span className="left profile-nav-title" style={{fontWeight:'400',paddingLeft:'10px',fontSize:'2em'}}>Hey! {props.profile.username} </span> {(props.auth.uid)? <button onClick={()=>props.logout(props.logout)} className="logout-btn btn black-text white">Logout</button>:null}</span>
                <ul  className="right hide-on-med-and-down" >
                <li><NavLink to={props.url}>About</NavLink></li>
               <li ><NavLink to={`${props.url}/articles`}>Your Articles</NavLink></li>
                <li style={{paddingRight:'20px'}}><Link to={`${props.url}/newarticle`}><button className="waves-effect waves-light btn black-text white">New Article</button></Link></li>
                </ul>
                </div>
            </nav>
            <nav className="mobile-profile-nav" >
                <div className="nav-wrapper black">
               <div className="profile-nav-items"> <ul >
               <li><NavLink to={props.url}>About</NavLink></li>
               <li ><NavLink to={`${props.url}/articles`}>Your Articles</NavLink></li>
                <li><Link to={`${props.url}/newarticle`}><button style={{paddingLeft:'10px',paddingRight:'10px'}} className="waves-effect waves-light btn black-text white">New Article</button></Link></li>
                </ul></div>
                </div>
            </nav>
        
        </div>
    )
}

const mapStatetoProps=(state)=>{
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
const mapDispatchtoProps=(dispatch)=>{
        return{
            logout: ()=>{dispatch(logOut())}
        }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProfileNavbar)
