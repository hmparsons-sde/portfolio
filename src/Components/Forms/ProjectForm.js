import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addProjects, updateProject } from '../../helpers/data/projectData';

const ProjectForm = ({
  firebaseKey,
  title,
  screenshot,
  overview,
  tech,
  github,
  url,
  available,
  setProjects,
  setShowForm,
  setEditing
}) => {
  const [project, setProject] = useState({
    firebaseKey: firebaseKey || '',
    title: title || '',
    screenshot: screenshot || '',
    overview: overview || '',
    tech: tech || '',
    github: github || '',
    url: url || '',
    available: available || false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.firebaseKey) {
      updateProject(project).then((projectArray) => setProjects(projectArray));
      setEditing(false);
    } else {
      addProjects(project).then((projectArray) => setProjects(projectArray));
      setShowForm(false);
    }
  };
  const handleInputChange = (e) => {
    setProject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'available' ? e.target.checked : e.target.value
    }));
  };

  return (
    <Form
      id="addProjectForm"
      autoComplete='off'
      onSubmit={handleSubmit}
      className='container'>
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
          type="url"
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
          type="url"
          name="github"
          id="github"
          value={project.github}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="netlify">Netlify Link</Label>
        <Input
          type="url"
          name="url"
          id="netlify"
          value={project.url}
          onChange={handleInputChange}
        />
      </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="available"
              id="available"
              checked={project.available}
              onChange={handleInputChange}
            />{' '}
            Available
          </Label>
        </FormGroup>
      <Button color='info' type='submit'>Submit</Button>
    </Form>
  );
};

ProjectForm.propTypes = {
  setProjects: PropTypes.func,
  title: PropTypes.string,
  screenshot: PropTypes.string,
  overview: PropTypes.overview,
  tech: PropTypes.tech,
  github: PropTypes.number,
  url: PropTypes.string,
  available: PropTypes.any,
  setShowForm: PropTypes.func,
  setEditing: PropTypes.func,
  firebaseKey: PropTypes.string
};

export default ProjectForm;
