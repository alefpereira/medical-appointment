app.config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.html5Mode({enabled: true, requireBase: true});

    $routeProvider.
      when('/doctors', {
        template: '<doctor-list></doctor-list>'
      }).
      when('/doctor/list', {
        template: '<doctor-list></doctor-list>'
      }).
      when('/doctor/edit', {
        template: '<doctor-form></doctor-form>'
      }).
      otherwise('/doctors');
  }
]);