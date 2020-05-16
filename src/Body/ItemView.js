import React from 'react'
import {Card,Row, Col, FormGroup, Input, Button, CardHeader } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';


class ItemView extends React.Component {
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
            <Card className='p-1'>
                <CardHeader tag='h5'>Owner Info</CardHeader>
            <Row className="p-0 m-0">
                <Col md={6}>
                    <img src={require('../images/Agricultural/maize.png')} width='350em' />
               <Link className='text-white' to='/differentItem'> <Button className='btn-block'> Contact Owner</Button> </Link>
                  </Col>
                  
                    <Col lg={6} className='mt-3'>
                       
                    <FormGroup>
                      <Input
                        type="name"
                        name="full_name"
                        placeholder="Mustapha Isa Toyin"
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
                      placeholder="Kawo Bustop GRA area Kano"
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
                      placeholder="$2000"
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
        )
    }
}
export default ItemView