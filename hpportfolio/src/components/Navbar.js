import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


function Navbar() {

  // const getClassName = (pathname) => {

  //   if (props.location.pathname === pathname) {
  //     return "nav-link active";
  //   } else {
  //     return "nav-link";
  //   }
  // }

  return (

    <div>
        <Nav>
          <NavItem>
          {/* <Link to="/home" className={getClassName("/home")}>Home</Link> */}
            <NavLink href="#"><i class="fa fa-home"></i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">The Latest</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Me</NavLink>
          </NavItem>
        </Nav>
        {/* <hr /> */}
  
      </div>
    );
  }

export default Navbar;