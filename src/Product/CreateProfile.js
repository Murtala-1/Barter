import React from 'react'
import {Row, Col, Form, Input, FormGroup, Card, CardHeader, Button} from 'reactstrap'


  class CreateProfile extends React.Component{
    state={
        full_name: '',
        email: '',
        user_address: '',
        country: '',
        city: '',
        user_state: '',
        file: '',
    
      }
      onChange = (e)=> {
          const {name, value} = e.target
         this.setState({
            [name] : value
         })
      }

      render(){
          return(
            <div style={{
              backgroundImage: `url(${require('../images/Agricultural/zobo2.jfif')})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'absolute',
              height: '20em'
            }}>
                 <Card className='p-3'  style={{top:'14em', position: 'relative'}}>
                    <CardHeader tag='h5'> Create New Commodity</CardHeader>            
                    <Form >
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
                      placeholder="The Location in details"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="country"
                      name="country"
                      onChange={this.onChange}
                      value={this.state.country}
                      id="country"
                      placeholder="Country"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="user_state"
                      name="user_state"
                      onChange={this.onChange}
                      value={this.state.user_state}
                      id="user_state"
                      placeholder="State"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="city"
                      name="city"
                      onChange={this.onChange}
                      value={this.state.city}
                      id="city"
                      placeholder="City"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Input
                      type="file"
                      name="file"
                      onChange={this.onChange}
                      value={this.state.file}
                      id="file"
                      placeholder="Upload your Logo/Picture"
                    />
                  </FormGroup>
                </Col>
                <Col sm={12}>
                 <center> <Button type="danger">Save</Button></center>
                </Col>
                </Row>
          </Form>
            </Card>  
          </div>
            
          )
      }
  }

  export default CreateProfile