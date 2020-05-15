import React, {useState} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CustomInput, InputGroupAddon, InputGroup } from 'reactstrap';



const Signup = () => {
    const [plateNo, setPlateNo] = useState('')
    const [name, setName] = useState('')
    const [available, setAvailable] = useState('')
    const [carName, setCarName] = useState('')
    const [price, setPrice] = useState('')
    const [stopover, setStopover] = useState('')
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [address, setAddress] = useState('')
    const [lastDrop, setLastDrop] = useState('')
    const [accountType, setAccountType] = useState('') 
    
   const  handleRadio = (e) =>{
        setAccountType(e.target.value)
      }

    return (
        <Row  className='m-0 p-0'>
         <Col sm={12} className='d-flex flex-direction-row align-items-center justify-content-center mt-lg-5'>
             <Card className="shadow w-75">
                 <CardHeader tag='h5'>Edit Your Profile </CardHeader>
    <Form  className='m-2'>
        <Row form>
            <Col sm={6}>
                <FormGroup>
                    <Input type="name" name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Driver Full name"/>
                </FormGroup>
            </Col>
           
            <Col md={3}>
                <FormGroup>
                    <Input type="text" name="carName" value={carName} onChange={e => setCarName(e.target.value)} placeholder="Car Name Please" />
                </FormGroup>
            </Col>
            <Col md={3}>
                <FormGroup>
                    <Input type="text" name="plateNo" value={plateNo} onChange={e => setPlateNo(e.target.value)} placeholder="Plate Number" />
                </FormGroup>
            </Col>
            
            <Col sm={6}>
                <FormGroup>
                    <Input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Your Home Adreess"/>
                </FormGroup>
            </Col>
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="from" value={from} onChange={e => setFrom(e.target.value)}  placeholder="Phone Number"/>
                </FormGroup>
            </Col> 
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="to" value={to} onChange={e => setTo(e.target.value)}  placeholder="Emergence Number    "/>
                </FormGroup>
            </Col>
            <Col sm={6}>
                <FormGroup>
                    <Input type="text" name="stopover" value={stopover} onChange={e => setStopover(e.target.value)} placeholder="National ID number"/>
                </FormGroup>
            </Col>    
            <Col sm={6}>
                 <FormGroup>
                    <Input type="text" name="lastDrop" value={lastDrop} onChange={e => setLastDrop(e.target.value)} placeholder="Driving License"/>
                </FormGroup>
            </Col>    
           
            </Row>
         <center> <Button color="info" className='pl-4 pr-4'>Update</Button> </center>
            </Form>
            </Card>
         </Col>
    </Row>
    )
}


export default Signup