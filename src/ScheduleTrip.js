import React from 'react';
import { CardHeader,Card, Col, Row, } from 'reactstrap';

const ScheduleTrip = (props) => {
  return (
      <Row className="m-0">
          <Col sm={2}></Col>
          <Col sm={8}>
          <Card className="mt-5 shadow">
            <CardHeader className="m-0">
            <Row className="m-0">
                <Col sm={2}>Picture</Col>
                <Col sm={1}>From</Col>
                <Col sm={1}>To</Col>
                <Col sm={2}>Date</Col>
                <Col sm={2}>Time</Col>
                <Col sm={4}>Pickup</Col>
            </Row>
            </CardHeader>
        <Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row>
        <Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row>
        <Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row><Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row><Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row><Row className="m-0">
            <Col sm={2} className="p-1"><img src={require('./img/avater.webp')} width='30px'/></Col>
            <Col sm={1}>Kano</Col>
            <Col sm={1}>Kaduna</Col>
            <Col sm={2}>03/04/2020</Col>
            <Col sm={2}> 02:00pm</Col>
            <Col sm={4}> Sabo Bakin Zuwo Road</Col>
        </Row>
    </Card>
    </Col>
    <Col sm={2}></Col>
    </Row>
  );
}

export default ScheduleTrip;