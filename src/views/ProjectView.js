import React, { useEffect, useState } from 'react';
import ProjectCard from '../Components/Cards/ProjectCards';
import { getProjects } from '../helpers/data/projectData';

export default function ProjectsView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((projectsArray) => setProjects(projectsArray));
  }, []);

  return (
    <main>
      <section>
        <div className="head">
          <header className="title">Projects</header>
        </div>
      <div className='projectsContainer mt-2'>
        {projects.map((project) => (
          <ProjectCard key={project.firebaseKey}
            setProjects={setProjects}
            {...project}
            />
        ))}
        </div>
      </section>
    </main>
  );
}
