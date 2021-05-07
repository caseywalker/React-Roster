import React from 'react';
import PropTypes from 'prop-types';

function Home({ user }) {
  return (
    <div>
    <h2>You are home</h2>
    { user ? <h2>logged in</h2> : <h2>logged out</h2>}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
