import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Button,
} from 'reactstrap';
// import styled from 'styled-components';
import { signInUser, signOutUser } from '../../helpers/auth';

// const StyledSideNav = styled.div`
//   height: 100%;
//   width: 25%;
//   position: fixed;
//   z-index: 1;
//   top: 0;
//   left: 0;
//   padding-top: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

const NavBar = ({ user }) => {
  const authenticated = () => (
    <>
      <NavItem>
        <Link className='nav-link' to='/admin/bio'>
          Edit Bio
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/admin/projects'>
          Edit Projects
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/admin/tech'>
          Edit Tech
        </Link>
      </NavItem>
      <NavItem>
        <Link className='nav-link' to='/admin/contact'>
          Edit Contact Info
        </Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">
          <i>🍔</i>
        </NavbarBrand>
          <Nav navbar>
            <NavItem>
              <Link className='nav-link' to='/bio'>
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/projects'>
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/tech'>
                Tech Stack
              </Link>
            </NavItem>
            <NavItem>
              <Link className='nav-link' to='/contact'>
                Contact
              </Link>
            </NavItem>
            {user && authenticated()}
            {user !== null && (
              <NavItem>
                <Button size='sm' color="danger" onClick={signOutUser}>
                  <i className="fas fa-sign-out-alt"></i>
                </Button>
                <Button size='sm' color="info" onClick={signInUser}>
                  <i className="fas fa-sign-in-alt"></i>
                </Button>
              </NavItem>
            )};
          </Nav>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any,
};

export default NavBar;
