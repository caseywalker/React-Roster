import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../App/components/PlayerCard';

function Team({ players }) {
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
          />
        ))
      }
    </div>
  );
}

Team.propTypes = {
  players: PropTypes.array.isRequired
};

export default Team;
