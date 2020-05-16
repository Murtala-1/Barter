import React from 'react'
import {Col, Navbar, Row, NavbarBrand, NavLink} from 'reactstrap'
import SecondNav from './SecondNav'

export default class NavBars extends React.Component {
    render(){
        return (
        
               <Row className='m-0 p-0'>
               <Col md={4} className='float-left'>
               <NavbarBrand href="/">
                    <img className='img' src={require('../Barter.png')} width='200' />
                </NavbarBrand>
                </Col>
               <Col md={8}>
                <SecondNav /> 
                 </Col>
                </Row>
         
        )
    }
}