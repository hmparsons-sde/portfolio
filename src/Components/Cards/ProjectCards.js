import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  CardBody, CardImg, CardText, CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from '../Forms/ProjectForm';
import { deleteProjects } from '../../helpers/data/projectData';

const NssProjects = styled.div`
  width: 500px;
  height: 300px;
  margin: 15px;
  box-shadow: 50px;
  display: flex;
  justify-content: center;
`;
export default function ProjectCard({ admin, setProjects, ...project }) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteProjects(project.firebaseKey)
          .then((projectsArray) => setProjects(projectsArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing here');
    }
  };
  return (
    <div>
      <NssProjects
        key={project.firebaseKey}
        id={project.firebaseKey}
        body>
      <CardBody>
        <CardImg src={project.screenshot} />
        <CardTitle tag="h5" className="mt-3">{project.title}</CardTitle>
        <CardText>{project.overview}</CardText>
        <CardText>{project.tech}</CardText>
            <Button href={project.github} target='_blank'>GitHub</Button>{' '}
            <Button href={project.url} target='_blank'>URL</Button>
            {
              admin && <div>
              <Button onClick={() => handleClick('delete')}>Delete Project</Button>
              <Button onClick={() => handleClick('edit')}>{editing ? 'Close Form' : 'Edit Project'}</Button>
            {
              editing && <ProjectForm
              setProjects={setProjects}
              {...project}
              />
            }
            </div>
          }
        </CardBody>
      </NssProjects>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
