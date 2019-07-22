import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/storage'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()
const realtimeDB = firebase.database()
const auth = firebase.auth();
const storage = firebase.storage()

export {
  db,
  storage,
  realtimeDB,
  auth,
};
