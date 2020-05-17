import React from 'react'
import {Card,Row, Col, FormGroup, Input, Button, CardHeader } from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';
import {MdLocationOn} from 'react-icons/md'

class ItemView extends React.Component {
    state={}
   

    render(){
       
        return (
            <Card className='p-1'>
                <CardHeader className='d-flex justify-content-between'><h5>Adewale Muritala Akinyemi</h5>
                <Link className='text-white' to='/differentItem'> <Button className=''> Compare Commodities</Button> </Link>
                </CardHeader>
            <Row className="p-0 m-0">
                <Col md={6}>
                    <img src={require('../images/Agricultural/maize.png')} width='330em' />
                  </Col>
                  
                    <Col lg={6} className='mt-3 text-center'>
                      <div>
                       <h6 className='lead '>Item: <label className=''>Maize</label></h6>
                       <h6 className='lead '>Quantity: <labe>10 toms</labe></h6>
                       <h6 className='lead '>Market Value: <label> $100</label></h6>
                       <h6 className='lead '>Close sub: <label> Ginger</label> </h6>
                       <h6 className='lead '><MdLocationOn/> <label>No1 Sabo Bakin Zuwo Road Kano</label> </h6>
                       </div>
                  </Col>
                
          
             </Row>
             </Card>  
        )
    }
}
export default withRouter(ItemView)