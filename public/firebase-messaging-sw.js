/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');
const config = {
  apiKey: 'AIzaSyCPQZGDxKwwJf5TygKU7hVUYy4cOC6rjgI',
  authDomain: 'winwin-61d53.firebaseapp.com',
  projectId: 'winwin-61d53',
  storageBucket: 'winwin-61d53.appspot.com',
  messagingSenderId: '202918400068',
  appId: '1:202918400068:web:ef368c0dd0818febec6c11',
  measurementId: 'G-QPCJM4RSF4',
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
