import React from 'react';
import styled from 'styled-components';
import {
  Button,
  CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const NssProjects = styled.div`
  width: 500px;
  height: 300px;
  margin: 15px;
  box-shadow: 50px;
  display: flex;
  justify-content: center;
`;
export default function ProjectCard({
  firebaseKey,
  title,
  screenshot,
  overview,
  tech,
  github,
  url,
}) {
  return (
    <NssProjects
      key={firebaseKey}
      id={firebaseKey}
      body>
    <CardBody>
      <CardImg src={screenshot} />
      <CardTitle tag="h5" className="mt-3">{title}</CardTitle>
      <CardText>{overview}</CardText>
      <CardText>{tech}</CardText>
          <Button id='btnModal' href={github} target='_blank'>GitHub</Button>{' '}
          <Button id='btnModal' href={url} target='_blank'>URL</Button>
    </CardBody>
    </NssProjects>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  screenshot: PropTypes.string,
  overview: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.string,
  url: PropTypes.string,
  firebaseKey: PropTypes.string
};
