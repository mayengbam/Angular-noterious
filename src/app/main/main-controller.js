'use strict';

angular.module('noterious')
  .controller('MainCtrl', function (UserModel, MyFireBaseAuth, $state) {
    var main = this;
    main.auth = MyFireBaseAuth;
    main.currentUser = null;
    main.currentColor = 'blue';

    main.colors = [
      'blue',
      'green',
      'orange',
      'red',
      'yellow'
    ];

    main.setCurrentColor = function(color) {
      main.currentColor = color;
    };

    main.logout = function () {
      UserModel.logout();
      $state.go('login');
    };

    main.auth.$onAuthStateChanged(function (firebaseUser) {
      if (firebaseUser) {
        UserModel.setCurrentUser(firebaseUser);
        main.currentUser = firebaseUser;
      } else {
        main.currentUser = null;
      }
    });
  });
