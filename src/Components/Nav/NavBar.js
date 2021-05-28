import React, { useState } from 'react';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button, NavLink
} from 'reactstrap';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../../helpers/auth';

const NavBar = ({ admin }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem className="mt-3 ml-2">
              <NavLink href='/'>
                <i className="fas fa-home fa-2x"></i>
              </NavLink>
            </NavItem>
          {
            admin !== null
              && <div>
                {
                  admin
                    ? <Button className="mt-2 ml-2" color="transparent" onClick={signOutUser}>
                 <i className="fas fa-eject fa-2x"></i>
                </Button>
                    : <Button className="mt-1" color="transparent" onClick={signInUser}>
                      <i className="fas fa-sign-in-alt fa-2x"></i>
                </Button>
              }
            </div>
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
