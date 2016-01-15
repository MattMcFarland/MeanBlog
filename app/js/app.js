angular.module('blogApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    
    $urlRouterProvider.otherwise('error');
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '../views/home.html',
        controller: 'MainCtrl'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: '../views/blog.html',
        controller: 'MainCtrl'
    })
    .state('error', {
        templateUrl: '../views/404.html'
    })
})

.controller('MainCtrl', ['$scope', function($scope){
    
}]);