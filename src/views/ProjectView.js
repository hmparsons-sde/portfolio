import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import ProjectCard from '../Components/Cards/ProjectCards';
import { getProjects } from '../helpers/data/projectData';
import ProjectForm from '../Components/Forms/ProjectForm';

const ProjectContainer = styled.div`  
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 0;
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5%;
`;
export default function ProjectsView({ admin }) {
  const [projects, setProjects] = useState([]);
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    setShowButton((prevState) => !prevState);
  };

  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
    <div>
      <h1 className="justify-content-center text-center mt-3 mb-3">My work</h1>
      <hr className="mt-3 w-50"/>
      {admin
      && <CreateButton className="header mt-2">
        { !showButton
          ? <Button className="m-2 btn-lg justify-content-center" color='danger' onClick={handleClick}>Add Project</Button>
          : <div>
          <Button className="m-2 btn-lg" color='secondary' onClick={handleClick}>Close</Button>
            <ProjectForm className="justify-content-center mt-3" setProjects={setProjects} admin={admin}/>
          </div>
          }
        </CreateButton>
      }
        <ProjectContainer className='projectsContainer mt-2 p-1'>
          {projects.map((project) => (
            <ProjectCard
              key={project.firebaseKey}
              setProjects={setProjects}
              admin={admin}
              {...project}
              />
          ))}
        </ProjectContainer>
      </div>
  );
}

ProjectsView.propTypes = {
  projects: PropTypes.array,
  admin: PropTypes.any,
  setProjects: PropTypes.func
};
