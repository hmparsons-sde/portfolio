import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getTechs = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addTechs = (obj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/tech.json`, obj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/tech/${response.data.name}.json`, body)
        .then(() => {
          getTechs().then((techsArray) => resolve(techsArray));
        });
    }).catch((error) => reject(error));
});

const deleteTech = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/tech/${firebaseKey}.json`)
    .then(() => getTechs().then((TechArray) => resolve(TechArray)))
    .catch((error) => reject(error));
});

const getSingleTech = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateTech = (techObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/tech/${firebaseKey}.json`, techObject)
    .then(() => {
      getTechs().then((techArray) => resolve(techArray))
        .catch((error) => reject(error));
    });
});

export {
  getTechs, deleteTech, addTechs, getSingleTech, updateTech
};
