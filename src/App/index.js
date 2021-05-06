import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import { getPlayers } from '../helpers/data/playerData';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const [players, setPlayers] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getPlayers().then((playersArray) => setPlayers(playersArray));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes players={players} setPlayers={setPlayers} />
      </Router>
    </div>
  );
}

export default App;
