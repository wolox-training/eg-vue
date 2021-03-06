'use strict';

angular.module('core.user').factory('Users', ['$http', 'Environment', function ($http, Environment) {
  const baseUrlApi = Environment.wBooksApiUrl + 'users';
  return {
    create: (user) => {
      return $http.post(baseUrlApi, user).then(resp => {
        return resp.data;
      }, resp => {
        if (resp.data.error) {
          throw new Error(resp.data.error);
        }
      });
    },
    information: () => {
      return $http.get(baseUrlApi + '/me').then(resp => {
        return resp.data;
      });
    }
  };
}]);
