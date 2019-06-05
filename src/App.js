import React from 'react';
import Navbar from './component/layout/Navbar';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Blog from './component/layout/Blog';
import Err from './component/layout/Error';
import Contributors from './component/layout/Contributors';
import Profile from './component/profile/Profile';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Blog}/>
        <Route path="/contributors" component={Contributors}/>
        <Route path="/profile/:username" component={Profile} />
        <Route component={Err}/>
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
