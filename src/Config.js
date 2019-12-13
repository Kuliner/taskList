const config = {
  firebaseConfig: {
    apiKey: process.env.firebase.apiKey,
    authDomain: process.env.firebase.authDomain,
    databaseURL: process.env.firebase.databaseURL,
    projectId: process.env.firebase.projectId,
    storageBucket: process.env.firebase.storageBucket,
    messagingSenderId: process.env.firebase.messagingSenderId,
    appId: process.env.firebase.appId,
    measurementId: process.env.firebase.measurementId,
  },
};

export default config;
