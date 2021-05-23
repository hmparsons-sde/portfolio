import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

export default function Footer() {
  return (
    <div id="navContainer">
      <Navbar expand="md" fixed="bottom">
          <Nav className="m-auto" navbar>
            <NavItem>
            © | Holly Parsons
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}
