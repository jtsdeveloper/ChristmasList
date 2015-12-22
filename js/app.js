var app = angular.module('app', ['ui.router'])

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

  app.controller('giftsController', function(){
    this.recipients = persons;
  })


var persons = [

  {
    name: "Jeremy",
    wishlist: [
      {
        gift1: "basketball",
        isBought: false
      },
      {
        gift2: "snacks",
        isBought: true
      },
      {
        gift3: "shoes",
        isBought: false
      },
      {
        gift4: "DVD",
        isBought: false
      },
      {
        gift5: "truck",
        isBought: false
      }
    ]
  },

  {
    name: "Karl",
    wishlist: [
      {
        gift1: "basketball",
        isBought: false
      },
      {
        gift2: "snacks",
        isBought: true
      },
      {
        gift3: "shoes",
        isBought: false
      },
      {
        gift4: "DVD",
        isBought: false
      },
      {
        gift5: "truck",
        isBought: false
      }
    ]
  },

  {
    name: "Malone",
    wishlist: [
      {
        gift1: "basketball",
        isBought: false
      },
      {
        gift2: "snacks",
        isBought: true
      },
      {
        gift3: "shoes",
        isBought: false
      },
      {
        gift4: "DVD",
        isBought: false
      },
      {
        gift5: "truck",
        isBought: false
      }
    ]
  }

]
