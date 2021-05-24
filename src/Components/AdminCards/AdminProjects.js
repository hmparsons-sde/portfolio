import React, { useState } from 'react';
import {
  Button,
  Card, CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteProjects } from '../../helpers/data/projectData';
import ProjectForm from '../Forms/ProjectForm';

export default function AdminProjectCard({
  firebaseKey,
  title,
  screenshot,
  overview,
  tech,
  github,
  url,
  available,
  admin,
  setProjects
}) {
  const [updating, setUpdating] = useState(false);

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProjects(firebaseKey)
          .then(setProjects);
        break;
      case 'update':
        setUpdating((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };
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
    <div className='btn-group-md justify-content-between'>
    <Button className='btn-md mr-1 ml-5 p-2' color="danger" onClick={() => handleClick('delete')}><i className="far fa-trash-alt"></i></Button>
      <Button className='btn-md p-2 ml-1' color="danger" onClick={() => handleClick('update')}>
        {updating ? 'Close Form' : 'Edit Project'}
      </Button>
    </div>
      {
        updating && <ProjectForm
        formTitle='Update Project'
        setProjects={setProjects}
        firebaseKey={firebaseKey}
        screenshot={screenshot}
        admin={admin}
        overview={overview}
        title={title}
        available={available}
        tech={tech}
        github={github}
        url={url}
        />
      }
    </Card>
  );
}

AdminProjectCard.propTypes = {
  title: PropTypes.string,
  screenshot: PropTypes.string,
  overview: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.string,
  url: PropTypes.string,
  available: PropTypes.string,
  firebaseKey: PropTypes.string,
  admin: PropTypes.string,
  setProjects: PropTypes.func
};
