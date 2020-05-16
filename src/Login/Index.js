import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import {Switch, Route, Redirect} from 'react-router-dom'
import SideBar from './SideBar'
import EditProfile from '../EditProfile'
import OfferRide from './OfferRide'
import RideHistory from './RideHistory'

const Index = ()=> {
    return (
        <div>
            <Row className='m-0 p-0'>
                <Col sm={2} style={{backgroundColor: 'white', height: '90vh'}}>
                    <SideBar />  
                </Col>
                <Col sm={9}>
                <Switch>
                    <Redirect exact from='/login' to='/login/edit' />
                    <Route path='/login/edit' component={EditProfile} />
                    <Route path='/login/add_trip' component={OfferRide} />
                    <Route path='/login/ride_history' component={RideHistory} />
                </Switch> 
                </Col>
            </Row>
        </div>
    )
}

export default Index