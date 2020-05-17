import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Badge
  
} from 'reactstrap';
import {MdNotifications} from 'react-icons/md'
import {DiRedhat} from 'react-icons/di'
import { Link, withRouter } from 'react-router-dom';


const LoginNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/product/createprofile">Create commodity</NavLink>
            </NavItem>
          </Nav>
             <UncontrolledDropdown inNavbar>
              <DropdownToggle nav caret>
                <DiRedhat size='35'/>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Edit Profile
                </DropdownItem>
                <DropdownItem>
                <Link  to='/product/commodity'>  Commodity List</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                <Link  to='/'>  Log out</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
      <Button color="primary" >
        <MdNotifications/> <Badge color="secondary">4</Badge>
      </Button>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default withRouter(LoginNavBar);