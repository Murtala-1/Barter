import React from 'react'
import {Card,Row, Col, FormGroup, Input, Button, CardHeader } from 'reactstrap'
import ItemView from './ItemView'


class DifferentItems extends React.Component {
    state={
        full_name: '',
        email: '',
        user_address: '',
        country: '',
        city: '',
        user_state: '',
    }
    render(){
        return (
            <div>
            <Row className="p-0 m-0">
                <Col md={6}>
                <Card className='p-1'>
                <CardHeader tag='h5'>Your item Info</CardHeader>
            <Row>
                <Col md={6}>
                    <img src={require('../images/Agricultural/ginger.jpg')} width='350em' />
                  </Col>
                  
                    <Col lg={6} className='mt-3'>
                       
                    <FormGroup>
                      <Input
                        type="name"
                        name="full_name"
                        placeholder="Adewale Muritala Akinyemi"
                        id="name"
                        onChange={this.onChange}
                        value={this.state.full_name}
                        disabled
                      />
                    </FormGroup>
                    <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      onChange={this.onChange}
                      value={this.state.email}
                      placeholder="example@gmail.com"
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="address"
                      name="user_address"
                      onChange={this.onChange}
                      value={this.state.user_address}
                      id="exampleAddress"
                      placeholder="Sabo Bakin Zuwo Road Kano"
                      disabled
                    />
                  </FormGroup>
                <hr></hr>
                  <FormGroup>
                    <Input
                      type="number"
                      name="number"
                      onChange={this.onChange}
                      value={this.state.city}
                      id="city"
                      placeholder="$3000"
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="Quantity"
                      onChange={this.onChange}
                      value={this.state.city}
                      id="quatity"
                      placeholder="100kg"
                      disabled
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="different"
                      onChange={this.onChange}
                      value={this.state.city}
                      id="different"
                      placeholder="Different: $100"
                      disabled
                    />
                  </FormGroup>

                  </Col>
                </Row>
             </Card>
             </Col>
             <Col sm={6}>
                <ItemView />
               </Col>
             </Row> 
             <center> <Button color='primary' className='mt-3'>Make Barter</Button>  </center>
             </div>
        )
    }
}
export default DifferentItems