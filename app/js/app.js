var toDoListApp = angular.module("toDoListApp", ["ngRoute", "ngAnimate"])
.config( function($routeProvider, $httpProvider, $locationProvider ){
    console.log("preparing to initialize app...");
    //AppRoutes sets up the app routes before app is initialized
    $locationProvider.hashPrefix("");
    AppRoutes($routeProvider);
    $routeProvider.otherwise("/splash"), { templateUrl: "views/spash.html", controller: "SplashCtrl" };

    //Reset Http Headers
    //TODO: Fix this
    $httpProvider.defaults.headers.common = {};
    $httpProvider.defaults.headers.post = {};
    $httpProvider.defaults.headers.put = {};
    $httpProvider.defaults.headers.patch = {};
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.interceptors.push('httpInterceptor');


})
.run(function($location){
    console.log("todo list app initialized!");
    // $location.path("/login");
});