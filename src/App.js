import React from 'react'
import './App.css'
import NavBars from './NavBarComponent/NavBars' 
import HomePage from './HomePage'
import BodyComponent from './Body/BodyComponent'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import DifferentItems from './Body/DifferentItems'




class App extends React.Component{
  render(){
    return (
      <div className='p-2 m-0'>
           <NavBars />
           <Switch>
             <Route path='/' exact>
                <HomePage />   
             </Route> 
             <Route path="/product" component={BodyComponent}/> 
             <Route path="/differentItem" component={DifferentItems}/>
           </Switch>
          
      </div>
    )
  }
}

export default App