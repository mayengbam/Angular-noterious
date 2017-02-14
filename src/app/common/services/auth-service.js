'use strict';

angular.module('noterious.common')
  .factory('MyFireBaseAuth', function ($firebaseAuth, ENDPOINT_URI, API_KEY, AUTH_DOMAIN) {
    var config = {
      apiKey: "AIzaSyBJzQcbxDBDzbq3Ux20fmWkMonqTWPeZxg",
      authDomain: "hawaijar-7fc30.firebaseapp.com",
      databaseURL: "https://hawaijar-7fc30.firebaseio.com",
      storageBucket: "hawaijar-7fc30.appspot.com",
      messagingSenderId: "69248005120"
    };
    /*var config = {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: ENDPOINT_URI
    };*/

    firebase.initializeApp(config);
    return $firebaseAuth(firebase.auth());
  })
  ;