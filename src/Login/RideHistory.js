import React from 'react';
import { Table, Card, CardHeader } from 'reactstrap';

const RideHistory = (props) => {
  return (
    <Card  className='shadow mt-lg-5 w-100'>
        <CardHeader tag='h6'> Trip History</CardHeader>
     
    <Table hover>
      <thead>
        <tr>
          <th>S/N</th>
          <th>Passenger Name</th>
          <th>From</th>
          <th>To</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Adewale Muritala</td>
          <td>Kano </td>
          <td>Abuja</td>
          <td>10/02/2020</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Mustapha Isa Toyin</td>
          <td>Kano</td>
          <td>Ilorin</td>
          <td>03/02/2020</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Abubakar Isa Boy</td>
          <td>Kano</td>
          <td>Nasarawa</td>
          <td>04/03/2020</td>
        </tr>
      </tbody>
    </Table>
    </Card> 
  );
}

export default RideHistory;