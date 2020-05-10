import React from 'react'
import {Col, Row, Card, CardHeader, Button, 
    Modal, ModalHeader, ModalBody, ModalFooter,
    Input, FormGroup,
} from 'reactstrap'
import {  } from 'antd';
import CommodityData from '../Product/CommodityData'

class CommodityList extends React.Component{
        state={
            modal: false,
            item_photo: '',
            item_name: '',
            item_location: '',
            item_unit: '',
            item_quantity: '',
            item_price: '',
            item_subtitude: ''
        }

        handleSubmitModal = () =>{
            const objs = {
                item_photo: this.state.item_photo,
                item_name: this.state.item_name,
                item_location: this.state.item_location,
                item_unit: this.state.item_unit,
                item_quantity: this.state.item_quantity,
                item_price: this.state.item_price,
                item_subtitude: this.state.item_subtitude
            }
            console.log(objs)
        }

        toggle = () => {
           this.setState(prev => ({
               modal: !prev.modal
           }))  
        }
        onChange = (e)=> {
            const {name, value} = e.target
           this.setState({
              [name] : value
           })
        }


    render(){
        const _CommodityData = CommodityData.map(item => 
            <Row className='m-0 p-0'>
                <Col md={1} sm={1} xs={1} className='m-0 p-0'>
                    <img className='p-lg-1' src={item.image} width='40px' />
                </Col>
                <Col md={2} sm={2} xs={2}>
                        {item.item}
                </Col >
                <Col md={4} sm={4} xs={4}>
                    <span>{item.address}</span>
                    </Col>
                    <Col md={3} sm={3} xs={3}>Subtitude Items: {item.closeSub} </Col>
                    <Col md={2} sm={2} xs={2} className='m-0 p-0' > 
                        <Button className='mt-lg-1'>Status</Button>
                    </Col>
            </Row>
        )

        const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

        return (
            <div>
                <Card className='m-0 p-0'>
                    <CardHeader className='d-flex justify-content-between'>
                        <h5> Commodity List </h5>
                       <Button onClick={this.toggle} color='primary'> Add Commodity</Button> 
                    </CardHeader>
                {_CommodityData}

                </Card>


                <Modal isOpen={ this.state.modal} toggle={this.toggle}>
      <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
      <ModalBody>
                <FormGroup>
                    <Input
                      type="file"
                      name="item_photo"
                      onChange={this.onChange}
                      value={this.state.item_photo}
                      id="item_photo"
                      placeholder="Upload your the Picture"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="name"
                      name="item_name"
                      onChange={this.onChange}
                      value={this.state.item_name}
                      id="item_name"
                      placeholder="Item Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="address"
                      name="item_location"
                      onChange={this.onChange}
                      value={this.state.item_location}
                      id="item_location"
                      placeholder="Item Location"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="item_unit"
                      onChange={this.onChange}
                      value={this.state.item_unit}
                      id="item_unit"
                      placeholder="Item Unit"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="item_quatity"
                      onChange={this.onChange}
                      value={this.state.item_quatity}
                      id="item_quatity"
                      placeholder="Item Quatity"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="number"
                      name="item_price"
                      onChange={this.onChange}
                      value={this.state.item_price}
                      id="item_price"
                      placeholder="Item Price"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="item_subtitude"
                      onChange={this.onChange}
                      value={this.state.item_subtitude}
                      id="item_subtitude"
                      placeholder="Subtitude Item"
                    />
                  </FormGroup>
        
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={ this.handleSubmitModal}>Save</Button>
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>

            </div>
        )
    }
}
export default CommodityList