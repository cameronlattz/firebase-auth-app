import * as firebase from 'firebase';
import * as config from './constants';

const firebaseConfig = {
  apiKey: config.FIREBASE_API_KEY,
  authDomain: config.FIREBASE_AUTH_DOMAIN,
  databaseURL: config.FIREBASE_DATABASE_URL,
  projectId: config.FIREBASE_PROJECT_ID,
  storageBucket: config.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();
