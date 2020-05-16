import React from 'react'
import {Row, Col, Button} from 'reactstrap'
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component {
  render() {
      
    return (
      <Row className='m-0 p-0'>
            <Button className='btn-block mt-1' color='primary'>
                <Link  className='text-white' to='/product/createprofile'>Create Profile</Link>
            </Button>
            <Button className='btn-block mt-1' color='primary'>
            <Link  className='text-white' to='/product/commodity'>Your Commodity List</Link>
            </Button>
            <Button className='btn-block mt-1' color='primary'>
                Recommendation
            </Button>
            <Button className='btn-block mt-1' color='primary'>
                Items Status
            </Button>
            <Button className='btn-block mt-1' color='primary'>
                Edit Profile
            </Button>
            <Button className='btn-block mt-1' color='primary'>
                Log Out
            </Button>
            
      </Row>
    );
  }
}

export default withRouter(SideBar) 