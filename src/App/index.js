import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { getPlayers } from '../helpers/data/playerData';
import Routes from '../helpers/Routes';
import './App.scss';
import NavBar from './components/NavBar';

function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((playersArray) => setPlayers(playersArray));
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar />
        <Routes players={players} setPlayers={setPlayers} />
      </Router>
    </div>
  );
}

export default App;
