import React from 'react'
import {Row, Col, Form, Input, FormGroup, Card, CardHeader} from 'reactstrap'
import { Button } from 'antd';

export default class HomePage extends React.Component{
  state={
    full_name: '',
    email: '',
    user_address: '',
    password: '',

  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

    render(){
        return (
            
          <Row className="p-0 m-0 pt-lg-3  d-flex flex-direction-row align-items-center">
          <Col md={6}>
            <img className="img-fluid br-3" src={require('./images/barter2.jpg')} />
            <h2 className="text-center display-4" > Little History About Barter</h2>
      <span className="text-center">A barter system is an old method of exchange. This system has been 
        used for centuries and long before money was invented. People exchanged 
        services and goods for other services and goods in return. 
        The value of bartering items can be negotiated with the other party.</span>
          </Col>
          <Col md={6}>
            <Card className='p-3'>
          <CardHeader> Sign up</CardHeader>
          <Form>
          <Row>
          <Col md={12} className='mt-3'>
                    <FormGroup>
                      <Input
                        type="name"
                        name="full_name"
                        placeholder="Full Name"
                        id="name"
                        onChange={this.onChange}
                        value={this.state.full_name}
                      />
                    </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      placeholder="example@gmail.com"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="address"
                      name="user_address"
                      onChange={this.onChange}
                      value={this.state.user_address}
                      id="exampleAddress"
                      placeholder="Your address in details"
                    />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup>
                    <Input
                      type="password"
                      name="password"
                      onChange={this.onChange}
                      value={this.state.password}
                      id="password"
                      placeholder="Enter your password"
                    />
                  </FormGroup>
                </Col>
                <Col sm={12}>
                 <center> <Button type="danger">Sign up</Button></center>
                </Col>
                </Row>
          </Form>
    
            </Card>
          </Col>
          </Row>
        
        )
    }
}