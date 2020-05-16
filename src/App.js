import React from 'react'
import './App.css'
import NavBar from './NavBar'
import JoinTrip from './JoinTrip'
import Signup from './Signup'
import {Switch, Route} from 'react-router-dom'
import Index from './Login/Index';
import ScheduleTrip from './ScheduleTrip'
import Footer from './Footer'





class App extends React.Component{
  render(){
    return (
      <div className='p-0 m-0' >
       <NavBar />      
      
       <Switch>
          <Route exact path='/'> 
        <JoinTrip /> 
          </Route>
          <Route exact path='/signup' component={Signup}  />
          <Route path='/login' component={Index} />
          <Route path='/schedule_trip' component={ScheduleTrip} />
          </Switch> 
          <Footer />  
      </div>
    )
  }
}

export default App