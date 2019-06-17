import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: 'AIzaSyC54YWhEuw97kFFujfclDQCBWlnpUnI2qc',
  authDomain: 'virtudes-ade7d.firebaseapp.com',
  databaseURL: 'https://virtudes-ade7d.firebaseio.com',
  projectId: 'virtudes-ade7d',
  storageBucket: 'virtudes-ade7d.appspot.com',
  messagingSenderId: '162436965995',
  appId: '1:162436965995:web:3dec2065fb721fc8'
};
firebase.initializeApp(config);

// firebase.firestore().settings(settings);

export default firebase;
