'use strict';

angular.module('noterious.common')
    .service('UserModel', function (MyFireBaseAuth, $log, $q) {
        var service = this,
            currentUser = null;

        service.getCurrentUser = function () {
            return currentUser;
        };

        service.setCurrentUser = function (user) {
            currentUser = user;
        };

        service.login = function (user) {
            return $q(function (resolve, reject) {
                MyFireBaseAuth.$signInWithEmailAndPassword(user.email, user.password)
                    .then((user) => {
                        $log.info(user + ', login successfully');
                        resolve(user);
                    })
                    .catch((error) => {
                        $log.info('User login failed, error:', error);
                        reject(error);
                    });

            });
        };

        service.register = function (user) {
            return $q(function (resolve, reject) {
                MyFireBaseAuth.$createUserWithEmailAndPassword(user.email, user.password)
                    .then((user) => {
                        $log.info(user + ', created successfully');
                        resolve(user);
                    })
                    .catch((error) => {
                        $log.info('User creation failed, error:', error);
                        reject(error);
                    });
            });
        };

        service.logout = function () {
            console.log('LOGOUT FIRED!');
            MyFireBaseAuth.$signOut();
            currentUser = null;
        };
    });
