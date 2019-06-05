import React from 'react'
import ProfileNavbar from './ProfileNavbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Articles from './Articles';
import NewArticle from './NewArticle';
import About from './About';
import Err from '../layout/Error';

const Profile = (props) => {
    console.log(props);
    const url = props.match.url;
    return (
        
      
           
            <BrowserRouter>
              <div>
            <ProfileNavbar url={url}/>
            <Switch>
            <Route exact path="/profile/:username" component={About} />
            <Route path={`${url}`+'/articles'} component={Articles} />
            <Route path={`${url}`+'/newarticle'} component={NewArticle} />
            <Route component={Err}/>
            </Switch>
            </div>
            </BrowserRouter>
        
    )
}

export default Profile
