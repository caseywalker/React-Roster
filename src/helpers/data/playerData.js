import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (object) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/players.json`, object)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbURL}/players/${response.data.name}.json`, body)
        .then(() => {
          getPlayers().then(resolve);
        });
    })
    .catch((error) => reject(error));
});

export { getPlayers, addPlayer };
