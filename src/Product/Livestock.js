import React from 'react'
import {Col} from 'reactstrap'
import { Layout, Menu, Card, Button, Row  } from 'antd';


const gridStyle = {
    textAlign: 'center',
    width:'21em',
    height: '25em'
  };

  class Livestock extends React.Component{
      render(){
          return(
              <div>
                    <Card title="Livestock">
                    <Row>
                    <Col sm={3}>
                        <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                            <div><Button className='mt-4'>Exchange with</Button></div>
                        </Card.Grid>
                    </Col>
                         <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                    </Col>                   
                    <Col sm={3}> <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                    <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                    </Col>                   
                    <Col sm={3}> <Card.Grid style={gridStyle}>
                         <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                   <Col sm={3}> <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                    <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>                   
                        <Col sm={3}> <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                    <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                    </Col>  <Col sm={3}> <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                   <Col sm={3}> <Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>
                    </Col>
                    <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                    </Col> <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                        </Col> <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                        </Col> <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                    </Col>    <Col sm={3}><Card.Grid style={gridStyle}>
                        <img class="card-img-top" src={require('../images/pix.JPG')} width='90px'/>
                        <div><Button className='mt-4'>Exchange with</Button></div>
                    </Card.Grid>

                </Col>               
                </Row>
                </Card>     
              </div>
          )
      }
  }

  export default Livestock