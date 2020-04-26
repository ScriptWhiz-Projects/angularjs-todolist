function AppRoutes($routeProvider) {
    $routeProvider.when("/login", { templateUrl: "views/login.html", controller: "LoginCtrl" });
    $routeProvider.when("/signup", { templateUrl: "views/signup.html", controller: "SignUpCtrl" });
    $routeProvider.when("/splash", { templateUrl: "views/splash.html"});
    $routeProvider.when("/todo", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/todo/:view", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/todo/:view/:itemid", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/profile", { templateUrl: "views/profile.html", controller: "ProfileCtrl" });
}