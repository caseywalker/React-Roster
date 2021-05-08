import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

function Home({ user }) {
  const authenticated = () => (
    <>
    <h2>Welcome to the Team Roster App</h2>
    <br />
    <h3>You can add a Player to your roster by clicking Add Players on the Navigation Bar</h3>
    <br />
    <h3>View all Players by clicking Team Roster. </h3>
    </>
  );

  const notAuthenticated = () => (
    <>
    <br />
    <h2>Please Sign In</h2>
    <Button color='info' onClick={signInUser}> Sign In </Button>
    </>
  );

  return (
    <div>
    { user ? authenticated() : notAuthenticated() }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
