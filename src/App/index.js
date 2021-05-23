import firebase from 'firebase';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Nav/Footer';
import NavBar from '../Components/Nav/NavBar';
import Routes from '../helpers/Routes';

function App({
  setProjects, setTech, setTechForm
}) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
      } else if (admin || admin === null) {
        setAdmin(false);
      }
    });
  }, []);
  return (
    <Router>
      <NavBar admin={admin}/>
      <Routes
        admin={admin}
        setProjects={setProjects}
        setTech={setTech}
        setTechForm={setTechForm}
      />
      <Footer />
    </Router>
  );
}

App.propTypes = {
  setProjects: PropTypes.func,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func,
  handleClick: PropTypes.func,
  setTech: PropTypes.func,
  setTechForm: PropTypes.func
};

export default App;
