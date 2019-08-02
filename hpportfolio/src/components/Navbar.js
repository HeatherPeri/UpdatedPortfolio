import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


function Navbar() {

  return (

    <div>
        <Nav>
          <NavItem>
            <NavLink href="/"><i class="fa fa-home"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Examples">The Latest</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Contact">Contact Me</NavLink>
          </NavItem>
        </Nav>
  
      </div>
    );
  }

export default Navbar;

