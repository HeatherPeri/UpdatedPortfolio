import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

function Navbar() {

  return (

    <div>
        <Nav>
          <NavItem>
            <NavLink href="#">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">The Lastest</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Me</NavLink>
          </NavItem>
        </Nav>
        <hr />
  
      </div>
    );
  }

export default Navbar;