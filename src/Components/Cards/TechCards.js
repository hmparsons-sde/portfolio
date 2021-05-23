import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardImg,
  CardText
} from 'reactstrap';
import PropTypes from 'prop-types';

const TechCardBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 25%;
  margin-top: 2%;
`;

const TechCard = ({
  icon,
  tech,
  firebaseKey
}) => (
  <TechCardBody>
  <Card className='card' key={firebaseKey}>
      <CardImg src={icon}></CardImg>
      <CardText>{tech}</CardText>
  </Card>
  </TechCardBody>
);

TechCard.propTypes = {
  icon: PropTypes.string,
  tech: PropTypes.string.isRequired,
  firebaseKey: PropTypes.any
};

export default TechCard;
