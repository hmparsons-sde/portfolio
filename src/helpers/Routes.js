import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectsView from '../views/ProjectView';
import Home from '../views/Home';
import TechView from '../views/TechView';
import Contact from '../views/ContactView';
import NotFound from '../views/NotFound';
import BioView from '../views/BioView';

export default function Routes({
  admin,
  firebaseKey,
  github,
  screenshot,
  tech,
  title,
  url,
  projects,
  setProjects,
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={Home} />
        <Route exact path='/about'
          component={BioView} />
        <Route
          path='/projects'
          component={() => <ProjectsView
            firebaseKey={firebaseKey}
            githubUrl ={github}
            screenshot={screenshot}
            technologiesUsed={tech}
            title={title}
            url={url}
            setProjects={setProjects}
            projects={projects}
            admin={admin}
          />}
          />
        <Route
          path='/tech'
          component={TechView}/>
        <Route
          path='/contact'
          component={Contact}
        />
        <Route
          path='*'
          component={NotFound}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  admin: PropTypes.any,
  setProjects: PropTypes.func,
  title: PropTypes.string,
  screenshot: PropTypes.string,
  overview: PropTypes.string,
  tech: PropTypes.string,
  github: PropTypes.number,
  url: PropTypes.string,
  available: PropTypes.any,
  projects: PropTypes.array,
  firebaseKey: PropTypes.string
};
