import React from 'react'
import { Row, Col } from 'reactstrap';
import MainBody from './MainBody'


export default class BodyComponent extends React.Component{
    render(){
        return (
            <Row className='m-0 p-0'>
                <Col sm={12} className='m-0 p-0'>
                    <MainBody/> 
                </Col>
                
            </Row>
        )
    }
}