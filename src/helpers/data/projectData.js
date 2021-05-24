import 'firebase';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const deleteProjects = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/projects/${firebaseKey}.json`)
    .then(() => getProjects().then((projectsArray) => resolve(projectsArray)))
    .catch((error) => reject(error));
});

const addProjects = (projectObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/projects.json`, projectObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/projects/${response.data.name}.json`, body)
        .then(() => {
          getProjects().then((projectsArray) => resolve(projectsArray));
        });
    }).catch((error) => reject(error));
});

const getSingleProject = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/projects/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateProject = (projectObject, firebaseKey) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/projects/${firebaseKey}.json`, projectObject)
    .then(() => {
      getProjects().then((projectsArray) => resolve(projectsArray))
        .catch((error) => reject(error));
    });
});

export {
  getProjects, deleteProjects, addProjects, getSingleProject, updateProject
};
