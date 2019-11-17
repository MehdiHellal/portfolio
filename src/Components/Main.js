import React from 'react'
import HomePage from './HomePage'
import {Switch, Route} from 'react-router-dom'
import Resume from './Resume'
import Projects from './Projects'
import Activity from './Activity'
import Contact from './Contact'

const Main = () => (
 <Switch>
     <Route exact path="/" component={HomePage}/>
     <Route path="/Resume" component={Resume}/>
     <Route path="/Projects" component={Projects}/>     
     <Route path="/Activity" component={Activity}/>
     <Route path="/Contact" component={Contact}/>
     
 </Switch>
    
)
export default Main;