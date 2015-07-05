angular.module('sportnews', ['ionic', 'service'])

.constant('ApiEndpoint', {
  url: 'http://localhost:8100/api'
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('SportNewsCtrl', function ($http, $scope) {
  
  $scope.stories = [];

  $http.get('http://globoesporte.globo.com/servico/equipe/sport/jogos.json')
   .success(function(response){
    console.log(response);
   }).error(function(error) { console.log(error)

  });

});
