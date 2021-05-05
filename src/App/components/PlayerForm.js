import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { addPlayer } from '../../helpers/data/playerData';

function PlayerForm({ setPlayers }) {
  const [player, setPlayer] = useState({
    imageUrl: '',
    name: '',
    position: ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player).then((playersArray) => setPlayers(playersArray));
  };
  return (
    <div className="player-form">
      <form className='mt-3' id='add-player-form' autoComplete='off' onSubmit={handleSubmit}>
        <label>Image URL:</label>
        <input
        className='ml-2'
        name='imageUrl'
        type='text'
        placeholder='URL'
        value={player.imageUrl.value}
        onChange={handleInputChange} />
        <br/>
        <label>Name:</label>
        <input
        className='ml-2'
        name='name'
        type='text'
        placeholder='Player Name'
        value={player.name.value}
        onChange={handleInputChange} />
        <br/>
        <label>Position:</label>
        <input
        className='ml-2'
        name='position'
        type='text'
        placeholder='Position'
        value={player.position.value}
        onChange={handleInputChange} />
        <br/>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}

PlayerForm.propTypes = {
  setPlayers: PropTypes.func.isRequired
};

export default PlayerForm;
