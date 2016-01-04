var app = angular.module('app', ['ui.router'])

  app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider,$stateProvider){
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

  app.controller('giftsController', function(){
    this.recipients = persons;
  })

var persons = [

  {
    name: "Jeremy",
    wishlist: [
      {
        gift: "basketball",
        isBought: true
      },
      {
        gift: "snacks",
        isBought: false
      },
      {
        gift: "shoes",
        isBought: true
      },
      {
        gift: "DVD",
        isBought: false
      }
    ]
  },

  {
    name: "Karl",
    wishlist: [
      {
        gift: "basketball",
        isBought: false
      },
      {
        gift: "snacks",
        isBought: true
      }
    ]
  }


]
