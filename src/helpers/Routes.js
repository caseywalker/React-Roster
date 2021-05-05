import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';

function Routes({ players }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route
        exact path='/team'
        component={() => <Team players={players} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired
};

export default Routes;
