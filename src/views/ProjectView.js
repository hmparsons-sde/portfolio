import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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

  useEffect(() => {
    getProjects().then((resp) => setProjects(resp));
  }, []);

  return (
    <div>
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
      {
        admin && <ProjectForm setProjects={setProjects}/>
      }
    </div>
  );
}

ProjectsView.propTypes = {
  projects: PropTypes.array,
  admin: PropTypes.any,
  setProjects: PropTypes.func
};
