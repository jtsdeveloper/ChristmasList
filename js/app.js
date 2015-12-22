angular.module('app', ['ui.router'])

  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider){
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'templates/home.html'
        })

        .state('lists', {
          url: '/lists',
          templateUrl: 'templates/lists.html'
        })

        .state('modify', {
          url: '/modify',
          templateUrl: 'templates/modify.html'
        })
  }])

  
