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
  projects, setProjects, tech, setTech
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={BioView} />
        <Route
          path='/projects'
          component={() => <ProjectsView projects={projects} setProjects={setProjects} />}
        />
        <Route
          path='/tech'
          component={() => <TechView tech={tech} setTech={setTech} />}
        />
        <Route
          path='/contact'
          component={Contact}
        />
        <Route path='*' component={NotFound} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  projects: PropTypes.array,
  setProjects: PropTypes.func,
  tech: PropTypes.array,
  setTech: PropTypes.func
};
