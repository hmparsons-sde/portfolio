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
      <CardImg>{screenshot}</CardImg>
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
  overview: PropTypes.overview,
  tech: PropTypes.tech,
  github: PropTypes.number,
  url: PropTypes.string,
  available: PropTypes.any,
  firebaseKey: PropTypes.string
};
