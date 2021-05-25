import React from 'react';
import propTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

export default function AdminView({ user }) {
  return (
    <div>
        {
          user
            ? <Button id="logOutBtn" onClick={signOutUser}>Sign Out</Button>
            : <Button id="logInBtn" onClick={signInUser}>Sign In</Button>
        }
    </div>
  );
}

AdminView.propTypes = {
  user: propTypes.any
};
