import React from 'react';
import {NavLink, Link} from 'react-router-dom';

const Navbar = () => {
    const username = 'saran';
    return (
        <div>
               <nav   className="nav-extended white">
                <div  className="nav-length nav-wrapper">
               
                <NavLink to="/" 
                style={{fontSize: '5em', fontFamily: 'Abril Fatface', marginTop:'20px'}} 
                className="brand-logo center jam-heading black-text flow-text">Just Another Magazine</NavLink>
                <ul className="right">
                    <li>
                    <Link to={`profile/${username}`}  className="thumb-link"><i className="material-icons grey-text ">account_circle</i></Link>
                    </li>
            
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

export default Navbar