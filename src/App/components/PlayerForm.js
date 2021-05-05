import React from 'react';

function PlayerForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(e.target.id);
  };
  return (
    <div className="player-form">
      <form id='add-player-form' autoComplete='off' onSubmit={handleSubmit}>

      </form>
    </div>
  );
}

export default PlayerForm;
