import React from 'react'
import {Col, Row, Container} from 'reactstrap'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SideBar from './SideBar'
import CreateProfile from '../Product/CreateProfile';
import CommodityList from '../Product/CommodityList';
import Recommendation from './Recommendation'
import ItemView from './ItemView'




export default class MainBody extends React.Component{
 
    render(){
        return(
            <Container className='m-2'>
           <Row className="m-0 p-0">
                <Col sm={8} className=''>
            <Switch>         
                <Redirect exact from='/product' to='/product/commodity' />
             <Route path="/product/createprofile" component={CreateProfile}/>
             <Route path="/product/commodity" component={CommodityList}/>
             <Route path="/product/itemview" component={ItemView}/>
           </Switch>
           </Col>

           <Col sm={4} className='p-0 m-0'>
             <Recommendation />
           </Col>
           </Row>
           </Container>
        )
    }
}