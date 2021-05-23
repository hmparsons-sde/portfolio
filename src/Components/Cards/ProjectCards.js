import React from 'react';
import {
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function ProjectCard({
  firebaseKey,
  title,
  screenshot,
  overview,
  tech,
  github,
  url,
  available,
}) {
  return (
    <Card
      key={firebaseKey}
      id={firebaseKey}
      body>
    <CardBody>
      <CardImg src={screenshot} />
      <CardTitle tag="h5">{title}</CardTitle>
      <CardText>{overview}</CardText>
      <CardText>{available}</CardText>
      <CardText>{tech}</CardText>
      <CardText>{github}</CardText>
      <CardText>{url}</CardText>
    </CardBody>
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  screenshot: PropTypes.string,
  overview: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.string,
  url: PropTypes.string,
  available: PropTypes.string,
  firebaseKey: PropTypes.string
};
