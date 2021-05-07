import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';
import PlayerForm from '../App/components/PlayerForm';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (attributes) => (user
    ? (<Component {...attributes} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: attributes.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
function Routes({ players, setPlayers, user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={() => <Home user={user} />} />
        <PrivateRoute
        user={user}
        path='/team'
        component={() => <Team players={players} setPlayers={setPlayers} user={user} />}
        />
        <PrivateRoute
        user={user}
        path='/add-players'
        component={() => <PlayerForm formTitle={'Add Player'} setPlayers={setPlayers} user={user} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Routes;
