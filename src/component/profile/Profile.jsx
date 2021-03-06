import React from 'react'
import ProfileNavbar from './ProfileNavbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Articles from './Articles';
import NewArticle from './NewArticle';
import About from './About';
import Err from '../layout/Error';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom';
import EditProfile from './EditProfile';
const Profile = (props) => {
    
    const url = props.match.url;
    

      if(!props.auth.uid) return <Redirect to="/" />
      return (

            <BrowserRouter>
              <div>
            <ProfileNavbar url={url}/>
            <Switch>
            <Route exact path="/profile/:id" component={About} />
            <Route path={`${url}/articles`} component={Articles} />
            <Route path={`${url}/newarticle`} component={NewArticle} />
            <Route path={`${url}/editprofile`} component={EditProfile} />
            <Route component={Err}/>
            </Switch>
            </div>
            </BrowserRouter>
      )
    }
  
const mapStatetoProps=(state)=>{
  return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
  }
}

export default connect(mapStatetoProps)(Profile)
