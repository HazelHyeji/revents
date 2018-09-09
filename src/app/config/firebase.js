import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiles-LcfHaES2wZhKUPcaukDWY-94soY",
  authDomain: "revents-212712.firebaseapp.com",
  databaseURL: "https://revents-212712.firebaseio.com",
  projectId: "revents-212712",
  storageBucket: "revents-212712.appspot.com",
  messagingSenderId: "537023330081"
}

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
}
firestore.settings(settings)
export default firebase;