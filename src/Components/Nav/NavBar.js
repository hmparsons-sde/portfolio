import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          <i>🍔</i>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
          <NavItem>
              <NavLink href='/'>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/about'>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/projects'>
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/tech'>
                Tech Stack
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/contact'>
                Contact
              </NavLink>
            </NavItem>
            {
              admin !== null
              && <NavItem>
                {
                  admin
                    ? <Button size='sm' color="danger" onClick={signOutUser}>
                 <i className="fas fa-sign-out-alt"></i>
                </Button>
                    : <Button size='sm' color="info" onClick={signInUser}>
                  <i className="fas fa-sign-in-alt"></i>
                </Button>
              }
              </NavItem>
            }
          </Nav>
          </Collapse>
        </Navbar>
      </div>
  );
};

NavBar.propTypes = {
  admin: PropTypes.any,
};

export default NavBar;
