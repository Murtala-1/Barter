import React from 'react'
import {Card,Row, Col, FormGroup, Input, Button, CardHeader } from 'reactstrap'
import ItemView from './ItemView'
import {MdLocationOn} from 'react-icons/md'


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
                <CardHeader tag='h5'>Mustapha Isa Toyin</CardHeader>
            <Row>
                <Col md={6}>
                    <img src={require('../images/Agricultural/ginger.jpg')} width='390em' />
                  </Col>
                  
                    <Col lg={6} className='mt-3 text-center'>
                    <div>
                       <h6 className='lead'>Item: <label className=''>Ginger</label></h6>
                       <h6 className='lead'>Quantity: <labe>30 toms</labe></h6>
                       <h6 className='lead'>Market Value: <label> $300</label></h6>
                       <h6 className='lead'>Close sub: <label> Maize</label> </h6>
                       <h6 className='lead'><MdLocationOn/> <label>Gawo Bus-stop Taurani area Kano  </label> </h6>
                       </div>

                  </Col>
                </Row>
             </Card>
             </Col>
             <Col sm={6}>
                <ItemView />
               </Col>
             </Row> 
             <center> <Button color='primary' className='mt-3'>Initiate Barter</Button>  </center>
             </div>
        )
    }
}
export default DifferentItems