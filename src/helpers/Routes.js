import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../views/Home';
import Team from '../views/Team';
import PlayerForm from '../App/components/PlayerForm';

function Routes({ players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route
        exact path='/team'
        component={() => <Team players={players} setPlayers={setPlayers} />}
        />
        <Route
        exact path='/add-players'
        component={() => <PlayerForm formTitle={'Add Player'} setPlayers={setPlayers} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired
};

export default Routes;
