import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyAV4J_GNnRCLQk7qvCapbumezm2uzysESk',
  authDomain: 'chat-web-app-7b707.firebaseapp.com',
  databaseURL: 'https://chat-web-app-7b707-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-7b707',
  storageBucket: 'chat-web-app-7b707.appspot.com',
  messagingSenderId: '695187614776',
  appId: '1:695187614776:web:2420263726d143ceb38acd',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
