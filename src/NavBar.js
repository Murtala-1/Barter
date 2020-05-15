import React, {useState} from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  import {Link, withRouter } from 'react-router-dom'

const NavBar = ()=>{
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div className="p-0 m-0">
           <Navbar color="light" light expand="md">
        <NavbarBrand href="/">2GER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
            <Link to='/login/add_trip'> <NavLink href="/components/"><Button size="sm"  color="info">Offer A Ride</Button></NavLink></Link>
            </NavItem>
            <NavItem>
              <NavLink>|</NavLink>
            </NavItem>
            <NavItem>
             <Link to='/signup'> <NavLink href="/components/">Sign up</NavLink></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

        </div>
    )
}
export default NavBar