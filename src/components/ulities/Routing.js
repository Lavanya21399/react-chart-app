import React, { Component } from 'react'
import Home from '../pages/Home'
import Charts from '../Charts/Chart'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Error from '../pages/Error'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Switch>
       
      
       <Route path= "/" component={Home}exact/>
       <Route path= "/charts" component={Charts}exact/>
       <Route path = "*" exact  component={Error}/>
     
       </Switch>

   </Router>
        
      
      </div>
    )
  }
}

export default App
