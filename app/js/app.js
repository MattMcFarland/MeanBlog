angular.module('blogApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
    
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: '/app/views/home.html',
        controller: 'MainCtrl'
    })
    .state('blog', {
        url: '/blog',
        templateUrl: '/app/views/blog.html'
    })
    .state('create_post', {
        url: '/create_post',
        templateUrl: '/app/views/create_post.html'
    })
    .state('error', {
        templateUrl: '/app/views/404.html'
    });
    
    $urlRouterProvider.otherwise('error');
})

.controller('MainCtrl', ['$scope', function($scope){
    
}])

.controller('CreatePostCtrl', ['$scope', function($scope){
    
}]);