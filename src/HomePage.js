import React from 'react'
import {Row, Col, Form, Input, FormGroup, Card, CardHeader,Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export default class HomePage extends React.Component{
  state={
    full_name: '',
    email: '',
    user_address: '',
    password: '',
    renderForm: true
  }

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

handleForm = ()=> {
    this.setState(prev => ({
      renderForm: !prev.renderForm
    }))
}
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
            {this.state.renderForm ?
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
                 <center> <Button color="primary">Sign up</Button></center>
                </Col>
                </Row>
                <center> <small>Have account?</small> <small className="text-info"><a onClick={this.handleForm}>Log in</a></small> </center>
          </Form>
          </Card>
          :
          <Card className="shadow w-100">
                 <CardHeader tag="h6">Log in </CardHeader>
                <Form className="m-2">
                  <Row form>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="email"
                          value={this.state.email}  onChange={this.onChange}
                          type="email"
                          placeholder="example@gmail.com"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="password"
                          value={this.state.password}  onChange={this.onChange}
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 <center><Link to="/product"> <Button color="primary">Log in</Button></Link></center>
                  <center>
                    <small>
                      Don't have Account?{' '}
                      <a className="text-info" onClick={this.handleForm}>
                        Sign up
                      </a>
                    </small>
                  </center>
                </Form>
              </Card>
              }
          </Col>
          </Row>
        
        )
    }
}