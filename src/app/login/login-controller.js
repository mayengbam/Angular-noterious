'use strict';

angular.module('noterious')
  .controller('LoginCtrl', ['MyFireBaseAuth', 'UserModel', '$state', '$scope', function (MyFireBase, UserModel, $state, $scope) {
    var login = this;
    login.loading = false;

    login.user = {
      email: '',
      password: '',
      register: false
    };

    function register() {
      UserModel.register({
        email: login.user.email,
        password: login.user.password
      })
        .then(onLogin)
        .catch(onError)
        .finally(onCompletion);
    }

    function onLogin() {
      UserModel.login({
        email: login.user.email,
        password: login.user.password
      })
        .then(onSuccess)
        .catch(onError)
        .finally(onCompletion);
    }

    function onSuccess(result) {
      $state.go('boards');
    }

    function onError(error) {
      login.error = error.message;
    }

    function onCompletion() {
      login.reset();
    }

    login.submit = function (user, isValid, isRegistering) {
      if (isValid) {
        login.loading = true;

        if (isRegistering) {
          register();
        } else {
          onLogin();
        }
      }
    };

    login.reset = function () {
      login.loading = false;
      login.user = {
        email: '',
        password: '',
        register: false
      };
    };

  }]);
