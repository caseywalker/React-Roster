import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addPlayer, updatePlayer } from '../../helpers/data/playerData';

function PlayerForm({
  formTitle,
  setPlayers,
  firebaseKey,
  imageUrl,
  name,
  position
}) {
  const [player, setPlayer] = useState({
    imageUrl: imageUrl || '',
    name: name || '',
    position: position || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player).then((playersArray) => setPlayers(playersArray));
    } else {
      addPlayer(player).then((playersArray) => setPlayers(playersArray));
    }
  };
  return (
    <div className="player-form">
      <form className='mt-3' id='add-player-form' autoComplete='off' onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label>Image URL:</label>
        <input
        className='ml-2'
        name='imageUrl'
        type='text'
        placeholder='URL'
        value={player.imageUrl}
        onChange={handleInputChange} />
        <br/>
        <label>Name:</label>
        <input
        className='ml-2'
        name='name'
        type='text'
        placeholder='Player Name'
        value={player.name}
        onChange={handleInputChange} />
        <br/>
        <label>Position:</label>
        <input
        className='ml-2'
        name='position'
        type='text'
        placeholder='Position'
        value={player.position}
        onChange={handleInputChange} />
        <br/>
        <Button color='info' type='submit'>Submit</Button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  formTitle: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string
};

export default PlayerForm;
