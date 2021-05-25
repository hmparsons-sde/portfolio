import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProjects, updateProject } from '../../helpers/data/projectData';

const ProjectForm = ({ setProjects, ...projectObj }) => {
  const [project, setProject] = useState({
    firebaseKey: projectObj.firebaseKey || '',
    title: projectObj?.title || '',
    screenshot: projectObj?.screenshot || '',
    overview: projectObj?.overview || '',
    tech: projectObj?.tech || '',
    github: projectObj?.github || '',
    url: projectObj?.url || '',
    available: projectObj?.available || false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
    } else {
      addProjects(project).then((projectArray) => setProjects(projectArray));
    }
  };
  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Form
      id="addProjectForm"
      autoComplete='off'
      onSubmit={handleSubmit}
      >
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="text"
          name="title"
          id="title"
          placeholder="Project Title"
          value={project.title}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="screenshot">Screenshot</Label>
        <Input
          type="text"
          name="screenshot"
          id="screenshot"
          value={project.screenshot}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="overview">Overview</Label>
        <Input
          type="text"
          name="overview"
          id="overview"
          value={project.overview}
          onChange={handleInputChange}
        />
        <FormText>
          Project Overview
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="tech">Tech Stack</Label>
        <Input
          type="text"
          name="techStack"
          id="tech"
          value={project.tech}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="githubRepo">GitHub Repo</Label>
        <Input
          type="text"
          name="github"
          id="github"
          value={project.github}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="netlify">Netlify Link</Label>
        <Input
          type="text"
          name="url"
          id="netlify"
          value={project.url}
          onChange={handleInputChange}
        />
      </FormGroup>
      <Button id='submitBtn' type='submit'>Submit</Button>
    </Form>
  );
};

ProjectForm.propTypes = {
  setProjects: PropTypes.func
};

export default ProjectForm;
