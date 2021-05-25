import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../Components/Cards/ProjectCards';
import { getProjects } from '../helpers/data/projectData';

const ProjectContainer = styled.div`  
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`;

export default function ProjectsView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  return (
    <ProjectContainer className='projectsContainer mt-2 p-3'>
        {projects.map((project) => (
          <ProjectCard key={project.firebaseKey}
            setProjects={setProjects}
            {...project}
            />
        ))}
    </ProjectContainer>
  );
}
