import React from 'react';
import styled from 'styled-components';
import {
  Card,
  CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';

const TechCardBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  width: 200px;
  height: auto;
  margin: 15px;
  border: none;
`;

const TechCard = ({
  icon,
  tech,
  firebaseKey
}) => (
  <TechCardBody>
  <Card className='card border-0' key={firebaseKey}>
      <CardImg src={icon} alt={tech} transparent></CardImg>
  </Card>
  </TechCardBody>
);

TechCard.propTypes = {
  icon: PropTypes.string,
  tech: PropTypes.string.isRequired,
  firebaseKey: PropTypes.any
};

export default TechCard;
