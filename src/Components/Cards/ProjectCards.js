import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Button,
  CardBody, CardImg
} from 'reactstrap';
import PropTypes from 'prop-types';
import ProjectForm from '../Forms/ProjectForm';
import { deleteProjects } from '../../helpers/data/projectData';
import ProjectModal from './ProjectModal';

const NssProjects = styled.div`
  width: 500px;
  height: auto;
  margin: 15px;
  box-shadow: 50px;
  display: flex;
  justify-content: start;
  // padding-bottom: 200px;
`;
export default function ProjectCard({ admin, setProjects, ...project }) {
  const [editing, setEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prevState) => !prevState);
  };
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        console.warn('this is deleting');
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
        body
      >
      <CardBody>
        <CardImg src={project.screenshot} onClick={openModal}/>
            {
              admin && <div className="row justify-content-center">
              <Button onClick={() => { handleClick('delete'); }}>Delete Project</Button>
              <Button onClick={() => { handleClick('edit'); }}>{editing ? 'Close Form' : 'Edit Project'}</Button></div>
            }
            {
              editing && <ProjectForm
              setProjects={setProjects}
              {...project}
              />
            }
        </CardBody>
      </NssProjects>
      <ProjectModal showModal={showModal} setShowModal={setShowModal} {...project}/>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.array,
  setProjects: PropTypes.func,
  admin: PropTypes.any
};
