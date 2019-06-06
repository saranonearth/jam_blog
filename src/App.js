import React from 'react';
import Navbar from './component/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Blog from './component/layout/Blog';
import Err from './component/layout/Error';
import Contributors from './component/layout/Contributors';
import Profile from './component/profile/Profile';
import Signin from './component/auth/Signin';
import Signup from './component/auth/Signup';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Blog}/>
        <Route path="/contributors" component={Contributors}/>
        <Route path="/profile/:username" component={Profile} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route component={Err}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
