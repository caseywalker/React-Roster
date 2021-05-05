import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

function PlayerCard({
  firebaseKey,
  imageUrl,
  name,
  position
}) {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={imageUrl} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{position}</CardSubtitle>
          <CardText>{name} is a {position} for the Nashville Predator&apos;s hockey team</CardText>
          <Button>Button {firebaseKey}</Button>
        </CardBody>
      </Card>
    </div>
  );
}

PlayerCard.propTypes = {
  firebaseKey: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired
};

export default PlayerCard;
