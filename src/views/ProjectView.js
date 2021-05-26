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
      {admin
      && <section className="header mt-2">
        { !showButton
          ? <Button className="m-2 btn-lg" color='danger' onClick={handleClick}>Add Project</Button>
          : <div>
          <Button className="m-2 btn-lg" color='secondary' onClick={handleClick}>Close</Button>
            <ProjectForm className="justify-content-center mt-3" setProjects={setProjects} admin={admin}/>
          </div>
          }
        </section>
      }
         <ProjectContainer className='projectsContainer mt-2 p-3'>
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
