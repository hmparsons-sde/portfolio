import firebase from 'firebase';

const signInAdmin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const signOutAdmin = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInAdmin, signOutAdmin };
