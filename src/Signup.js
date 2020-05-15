import React, {useState} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CustomInput, } from 'reactstrap';
import {Link, withRouter, } from "react-router-dom"




const Signup = () => {
    const [renderForm, setRenderForm] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [accountType, setAccountType] = useState('') 
    
   const  handleRadio = (e) =>{
        setAccountType(e.target.value)
      }

  const handleForm = ()=> {
       setRenderForm(!renderForm)
   }
    return (
        <Row  className='m-0 p-0'>
    
         <Col sm={12} className='d-flex flex-direction-row align-items-center justify-content-center mt-5 '>
         {renderForm ? 
             <Card className="shadow w-50">
                 <CardHeader tag='h6'>Sign up</CardHeader>
    <Form  className='m-2'>
        <Row form>
            <Col sm={6}>
                <FormGroup>
                    <Input type="name" name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Full name"/>
                </FormGroup>
            </Col>
            <Col sm={6}>
                <FormGroup>
                    <Input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}  placeholder="example@gmail.com"/>
                </FormGroup>
            </Col>
            <Col sm={12}>
                <FormGroup>
                    <Input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Address: 1234 Main St"/>
                </FormGroup>
            </Col>           
            <Col sm={6}>
                <FormGroup>
                    <Input type="phone" name="phone" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number"/>
                </FormGroup>
            </Col> 
            <Col sm={6}>
                <FormGroup>
                    <Input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password"/>
                </FormGroup>
            </Col> 

          
                         <Col sm={2}> <h6>Account Type</h6></Col>
                         <Col sm={2}>
                            <CustomInput 
                            type="radio" 
                            value ='passenger'
                            checked={accountType === 'passenger'} 
                            onChange={handleRadio} 
                            name="passenger" 
                            label="Passenger" />
                        </Col>
                         <Col sm={2}> 
                            <CustomInput 
                            type="radio" 
                            value ='driver'
                            checked={accountType === 'driver'} 
                            onChange={handleRadio}  
                            name="driver" 
                            label="Driver" />
                        </Col>

            </Row>
           
                <center> <Link to='/login'> <Button color="info" className='pl-4 pr-4'>Sign up</Button></Link></center>
                <center> <small>Have account?</small> <small className="text-info"><a onClick={handleForm}>Log in</a></small> </center>
            </Form>
            </Card>
            :
            <Card className="shadow w-50">
                 <CardHeader tag="h6">Log in </CardHeader>
                <Form className="m-2">
                  <Row form>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="email"
                          value={email} onChange={e => setEmail(e.target.value)}
                          type="email"
                          placeholder="example@gmail.com"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup>
                        <Input
                          name="password"
                          value={password} onChange={e => setPassword(e.target.value)}
                          type="password"
                          placeholder="Password"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 <center><Link to='/login'> <Button color="info">Log in</Button></Link></center>
                  <center>
                    <small>
                      Don't have Account?{' '}
                      <a className="text-info" onClick={handleForm}>
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


export default withRouter(Signup)