import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../App/components/PlayerCard';

function Team({ players, setPlayers, user }) {
  return (
    <div className="card-container">
      <br/>
      {
        players.map((playerInfo) => (
          <PlayerCard
          key={playerInfo.firebaseKey}
          firebaseKey={playerInfo.firebaseKey}
          imageUrl={playerInfo.imageUrl}
          name={playerInfo.name}
          position={playerInfo.position}
          setPlayers={setPlayers}
          user={user}
          />
        ))
      }
    </div>
  );
}

Team.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any
};

export default Team;
