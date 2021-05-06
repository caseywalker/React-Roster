import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import PlayerForm from './PlayerForm';

function PlayerCard({
  firebaseKey,
  imageUrl,
  name,
  position,
  setPlayers,
  user
}) {
  const [editing, setEditing] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default: console.warn('nothing selected');
    }
  };

  return (
    <div>
      <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h3">{name}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">{position}</CardSubtitle>
          <CardText>{name} is a {position} for the Nashville Predator&apos;s hockey team</CardText>
          <Button className='mt-1' color='info' onClick={() => handleClick('edit')}> {editing ? 'Close Form' : 'Edit Player'}
          </Button>
          {
            editing && <PlayerForm
            formTitle= {'Edit Player'}
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            imageUrl={imageUrl}
            name={name}
            position={position}
            user={user}
            />
          }
          <br />
          <Button className='mt-1' color='danger' onClick={() => handleClick('delete')}>Delete Player</Button>
        </CardBody>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};

export default PlayerCard;
