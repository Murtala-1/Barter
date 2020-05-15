import React from 'react'
import { Col, Row, Button, Form, FormGroup, InputGroupAddon, Input, Card, CardHeader, InputGroup } from 'reactstrap';
import {Link, withRouter, } from "react-router-dom"

const JoinTrip = () => {
    return (
        <Row className='p-0 m-0' style={{maxHeight: '100%'}}>
        <Col sm={6}> <img src={require('./undraw_order_ride_xjs4.svg')} className='img-fluid mt-4'/></Col>
        <Col sm={6} className='d-flex flex-direction-row align-items-center justify-content-center mt-lg-5'>
          
        <Card className='shadow w-75'> 
            <CardHeader tag="h5">Join the Ride</CardHeader>       
       <Form>
        <Row form className='m-2'>
          <Col md={6}>
              
            <FormGroup>
              <Input type="text" name="from" id="from" placeholder="From Where" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
             
              <Input type="text" name="to" id="to" placeholder="To Where" />
            </FormGroup>
          </Col>
          <Col md={6}>
          <InputGroup>
                <InputGroupAddon addonType="prepend">Date</InputGroupAddon>
                    <Input type="date" name="date"  />
                </InputGroup>
          </Col>
          <Col md={6}>
          
        <Link to='/schedule_trip'><Button className='btn-block' outline color="info">Search</Button></Link>
          </Col>
        </Row>
      </Form>
      </Card>
      </Col>
          </Row>
    )
}

export default withRouter(JoinTrip)
