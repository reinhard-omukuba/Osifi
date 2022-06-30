const firebaseConfig = {
    apiKey: "AIzaSyDBm_-RWQXIkBZONwTtwfxY-_IXQrKGQXc",
    authDomain: "ofisi-d7510.firebaseapp.com",
    projectId: "ofisi-d7510",
    storageBucket: "ofisi-d7510.appspot.com",
    messagingSenderId: "958308000543",
    appId: "1:958308000543:web:e779fd4c33991e6b1ac62a",
    measurementId: "G-97MHJZ24H5"
  };


  firebase.initializeApp(firebaseConfig);


  //access data offline
  firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });