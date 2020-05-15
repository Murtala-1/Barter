import React, {useState} from 'react'
import { Col, Row, Button, Form, FormGroup, Label, Input, Card, CardHeader, CustomInput, InputGroupAddon, InputGroup } from 'reactstrap';



const Signup = () => {
    const [date, setDate] = useState('')
    const [name, setName] = useState('')
    const [available, setAvailable] = useState('')
    const [time, setTime] = useState('')
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
                 <CardHeader tag='h5'>Add Trip </CardHeader>
    <Form>
        <Row form className='m-2'>
            <Col sm={9}>
                <FormGroup>
                    <Input type="name" name="name" value={name} onChange={e => setName(e.target.value)}  placeholder="Driver Full name"/>
                </FormGroup>
            </Col>
            <Col md={3}>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">N</InputGroupAddon>
                    <Input type='number' name="price" value={price} onChange={e => setPrice(e.target.value)}  placeholder="Price"/>
                </InputGroup>
            </Col>
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="from" value={from} onChange={e => setFrom(e.target.value)}  placeholder="From Where"/>
                </FormGroup>
            </Col> 
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="to" value={to} onChange={e => setTo(e.target.value)}  placeholder="To Where"/>
                </FormGroup>
            </Col>
           
            <Col md={3}>
                <InputGroup>
                <InputGroupAddon addonType="prepend">Date</InputGroupAddon>
                    <Input type="date" name="date" value={date} onChange={e => setDate(e.target.value)} />
                </InputGroup>
            </Col>
            <Col md={3}>
                <InputGroup>
                <InputGroupAddon addonType="prepend">Time</InputGroupAddon>
                    <Input type="time" name="time" value={time} onChange={e => setTime(e.target.value)}  placeholder="" />
                </InputGroup>
            </Col>
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="available" value={available} onChange={e => setAvailable(e.target.value)}  placeholder="Available Seat"/>
                </FormGroup>
            </Col>
           
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} placeholder="Pick Up Address"/>
                </FormGroup>
            </Col>
            <Col sm={3}>
                <FormGroup>
                    <Input type="text" name="stopover" value={stopover} onChange={e => setStopover(e.target.value)} placeholder="Input Stop Over"/>
                </FormGroup>
            </Col>    
            <Col sm={3}>
                 <FormGroup>
                    <Input type="text" name="lastDrop" value={lastDrop} onChange={e => setLastDrop(e.target.value)} placeholder="Last Drop"/>
                </FormGroup>
            </Col>    
           
            </Row>
         <center> <Button color="info" className='pl-4 pr-4 m-2'>Add Trip</Button> </center>
            </Form>
            </Card>
         </Col>
    </Row>
    )
}


export default Signup