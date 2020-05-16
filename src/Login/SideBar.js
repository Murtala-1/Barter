import React from 'react' 
import { Button} from 'reactstrap'
import {Link, withRouter, } from "react-router-dom"

const SideBar = ()=> {
    return (
             <div>
                    <center><img className="img-fliud m-2" src={require("../img/avater.webp")} width="100em"/></center>
                   <Link to='/login/edit'> <Button outline color='info' className='btn-block mt-1'> Update Profile</Button></Link> 
                   <Link to='/login/add_trip'> <Button outline color='info' className='btn-block mt-1'> Create New Trip</Button></Link> 
                   <Link to='/login/ride_history'> <Button outline color='info' className='btn-block mt-1'> Trip History</Button> </Link>
                   <Link to='/'> <Button outline color='info' className='btn-block mt-1'> Log out</Button></Link> 
             </div>
    )
}
export default withRouter(SideBar)