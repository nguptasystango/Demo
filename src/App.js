import React, {Component} from 'react'; 
import classes from './App.module.css'; 
import {Route, Switch, Redirect} from 'react-router-dom';
import Login from './containers/Login/Login';
import Registration from './containers/Registration/Registration';
import Home from './containers/Home/Home'; 

class App extends Component {
  render () {
    return (
      <div> 
         <Switch> 
          <Route path="/login" component={Login} />
          <Route path='/register' component={Registration} />
          <Route path="/home" component={Home} />
          <Redirect from='/' to='/home' />
         </Switch> 
      </div> 
    );
  } 
} 
export default App;
