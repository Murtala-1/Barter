import React from 'react'
import {Col, Row, Card, CardHeader, CardBody, Input, FormGroup
} from 'reactstrap'
import CommodityData from '../Product/CommodityData'
import { Link, withRouter } from 'react-router-dom';



class Recommendation extends React.Component{
        state={
            item_search: ''
           }

      
        onChange = (e)=> {
            const {name, value} = e.target
           this.setState({
              [name] : value
           })
        }
        handleSearch = ()=>{
            this.setState.filter((index, item) => {
                index.item_search.upperCase()
            })
        }

    render(){
        const _CommodityData = CommodityData.map(item =>
            <Link to='/product/itemview' className='text-danger'> 
            <Row className='m-0 p-0'style={{cursor: 'pointer'}}>
                <Col md={2} sm={2} xs={2} className='m-0 p-1'>
                    <img className='img-fluid' src={item.image} width='40px' />
                </Col>
                <Col md={4} sm={4} xs={4} className='m-0 p-1'>
                        {item.item}
                </Col >
                    <Col md={6} sm={6} xs={6} className='m-0 p-1'>Subtitude Items: {item.closeSub} </Col>
            </Row>
            </Link>
            )
        return (
            <div >
                <Card className='m-0 p-0'>
                    <CardHeader className='d-flex justify-content-between'>
                        <h5> Recommendations </h5>
                    </CardHeader>
                    <FormGroup className='m-1 p-0'>
                    <Input
                      type="search"
                      name="item_search"
                      onChange={this.onChange}
                      value={this.state.item_search}
                      id="item_search"
                      placeholder="Search items"
                    />
                  </FormGroup>
              {_CommodityData}
                
                </Card>
            </div>
        )
    }
}
export default withRouter(Recommendation)