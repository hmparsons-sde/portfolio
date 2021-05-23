import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectsView from '../views/ProjectView';
import Home from '../views/Home';
import TechView from '../views/TechView';

export default function Routes({
  projects, setProjects, tech, setTech
}) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/projects'
          component={() => <ProjectsView projects={projects} setProjects={setProjects} />}
        />
        <Route
          path='/tech'
          component={() => <TechView tech={tech} setTech={setTech} />}
        />
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
