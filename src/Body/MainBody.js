import React from 'react'
import {Col, Row} from 'reactstrap'
import { Layout, Menu, Breadcrumb, Card, Button,   } from 'antd';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import SideBar from './SideBar'
import CreateProfile from '../Product/CreateProfile';
import CommodityList from '../Product/CommodityList';
import Recommendation from './Recommendation'
import ItemView from './ItemView'




export default class MainBody extends React.Component{
 
    render(){
        return(

           <Row className="m-0 p-0">
               <Col sm={2} className='p-0 m-0'>
                   <SideBar/>
               </Col >
                <Col sm={6} className='pl-0 ml-0 pr-2'>
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
    
        )
    }
}