import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectsView from '../views/ProjectView';
import Home from '../views/Home';
import TechView from '../views/TechView';
import Contact from '../views/ContactView';
import NotFound from '../views/NotFound';
import BioView from '../views/BioView';

export default function Routes({ admin }) {
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
          component={() => <ProjectsView admin={admin}/>}
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
  user: PropTypes.any,
  admin: PropTypes.any
};
