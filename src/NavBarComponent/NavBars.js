import React from 'react'
import {Col, Navbar, Row, NavbarBrand, NavLink} from 'reactstrap'
import SecondNav from './SecondNav'
import LoginNavBar from './LoginNavBar'
import { Route, useLocation, } from 'react-router-dom';

function NavBars() {
    const location = useLocation()
    return (
        <Row className='m-0 p-0'>
        <Col md={4} className='float-left'>
        <NavbarBrand href="/">
         <img className='img' src={require('../Barter.png')} width='200' />
         </NavbarBrand>
         </Col>
        <Col md={8}>
           {location.pathname === '/' ? 
         <SecondNav />
            :
         <LoginNavBar/>
        }
          </Col>
         </Row>
    )
}

export default NavBars 