import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectsView from '../views/ProjectView';
import Home from '../views/Home';
import TechView from '../views/TechView';
import Contact from '../views/ContactView';
import NotFound from '../views/NotFound';
import BioView from '../views/BioView';

const PrivateRoute = ({ component: Component, admin, ...rest }) => {
  const routeChecker = (burrito) => (admin
    ? (<Component {...burrito} admin={admin} />)
    : (<Redirect to={{ pathname: '/', state: { from: burrito.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  admin: PropTypes.any
};
export default function Routes({
  setProjects, setTech, setTechForm, setShowForm, admin, setAdmin, setBio, setBioForm, setContactForm, setContact
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
          component={ProjectsView} />
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
        <PrivateRoute
          path='/admin/about'
          component={() => <BioView admin={admin} setBio={setBio} setBioForm={setBioForm} setAdmin={setAdmin} />}
        />
        <PrivateRoute
          path='/admin/projects'
          component={() => <ProjectsView admin={admin} setProjects={setProjects} setShowForm={setShowForm} setAdmin={setAdmin} />}
        />
        <PrivateRoute
          path='/admin/tech'
          component={() => <TechView admin={admin} setTech={setTech} setTechForm={setTechForm} setAdmin={setAdmin} />}
        />
        <PrivateRoute
          path='/admin/contact'
          component={() => <Contact admin={admin} setContact={setContact} setContactForm={setContactForm} setAdmin={setAdmin} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  setProjects: PropTypes.func,
  setTech: PropTypes.func,
  setTechForm: PropTypes.func,
  setBio: PropTypes.func,
  setBioForm: PropTypes.func,
  setShowForm: PropTypes.func,
  setContact: PropTypes.func,
  setContactForm: PropTypes.func,
  admin: PropTypes.any,
  setAdmin: PropTypes.func
};
