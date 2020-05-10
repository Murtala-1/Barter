import React from 'react'
import {Col, Row,  } from 'reactstrap'
import { Input, Button } from 'antd';
import { BsPhone } from 'react-icons/bs';


export default class FirstNav extends React.Component {
        state={
            email: '',
            password: ''
        }
    render(){
        return (
            <Row className='mt-2 m-0 p-0'>
            <Col sm={4}>
            <Input  
                type='email'
                placeholder='example@gmail.com'
                name={this.state.email}
                value={this.state.email}
                onChange={(e) => this.setState({email: e.target.value})}
            />
           </Col>
           <Col sm={3}>
            <Input  
                type='password'
                placeholder='your password'
                name={this.state.password}
                value={this.state.password}
                onChange={(e) => this.setState({password: e.target.value})}
            />
           </Col>
            <Col sm={2} className=''><Button type='danger'> Login</Button> </Col>
            </Row>
        )
    }
}