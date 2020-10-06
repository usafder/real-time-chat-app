import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "your_key",
  authDomain: "your_project.firebaseapp.com",
  databaseURL: "https://your_project.firebaseio.com",
  projectId: "your_project",
  storageBucket: "your_project.appspot.com",
  messagingSenderId: "your_message_sending_id",
};

const firebaseInstance = firebase.initializeApp(firebaseConfig);

export default firebaseInstance;
