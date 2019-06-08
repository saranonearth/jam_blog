import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import {connect} from 'react-redux'
const Navbar = (props) => {
    console.log(props);
    return (
        <div>
               <nav   className="nav-extended white">
                <div  className="nav-length nav-wrapper">
               
                <NavLink to="/" 
                style={{fontSize: '5em', fontFamily: 'Abril Fatface', marginTop:'20px'}} 
                className="brand-logo center jam-heading black-text flow-text">Just Another Magazine</NavLink>
                <ul className="right">
                    {(props.auth.uid)? (
                    <li >
                    <Link style={{paddingLeft:'0px'}} to={`profile/${props.auth.uid}`}  className="thumb-link"><i className="material-icons grey-text ">account_circle</i></Link>
                    </li>
                    ):(
                    <li >
                    <Link style={{paddingLeft:'0px'}} to="/signin"  className="thumb-link"><i className="material-icons grey-text ">account_circle</i></Link>
                    </li>
                    ) }
                    
                  
                </ul>
                </div>
                <div className="nav-content">
                <div className="center">
                <NavLink to="/"><span  className="nav-item">HOME</span></NavLink>
                <NavLink to="/contributors" ><span  className="nav-item">WALL OF CONTRIBUTORS</span></NavLink>
                </div>
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


export default connect(mapStatetoProps)(Navbar)