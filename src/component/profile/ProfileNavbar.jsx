import React from 'react'
import {NavLink,Link} from 'react-router-dom';
const ProfileNavbar = (props) => {
    
    return (
        <div>
            <nav>
                <div className="nav-wrapper black">
                <span className="left profile-nav-title" style={{fontWeight:'400',paddingLeft:'10px',fontSize:'2em'}}>Hey! Saran</span>
                <ul  className="right hide-on-med-and-down" >
                <li><NavLink to={props.url}>About</NavLink></li>
               <li ><NavLink to={`${props.url}`+"/articles"}>Your Articles</NavLink></li>
                <li style={{paddingRight:'20px'}}><Link to={`${props.url}`+"/newarticle"}><button className="waves-effect waves-light btn black-text white">New Article</button></Link></li>
                </ul>
                </div>
            </nav>
            <nav className="mobile-profile-nav" >
                <div className="nav-wrapper black">
               <div className="profile-nav-items"> <ul >
               <li><NavLink to={props.url}>About</NavLink></li>
               <li ><NavLink to={`${props.url}`+"/articles"}>Your Articles</NavLink></li>
                <li><Link to={`${props.url}`+"/newarticle"}><button className="waves-effect waves-light btn black-text white">New Article</button></Link></li>
                </ul></div>
                </div>
            </nav>
        
        </div>
    )
}

export default ProfileNavbar
