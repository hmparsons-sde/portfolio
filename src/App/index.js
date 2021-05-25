import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from '../Components/Nav/Footer';
import NavBar from '../Components/Nav/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [admin, setAdmin] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed && (authed.uid === process.env.REACT_APP_ADMIN_UID)) {
        setAdmin(true);
        setLoggedInUser(true);
      } else if (admin || admin === null) {
        setAdmin(false);
        setLoggedInUser(false);
      }
    });
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes
        admin={admin}
        user={loggedInUser}
      />
      <Footer />
    </Router>
  );
}

export default App;
