function AppRoutes($routeProvider) {
    $routeProvider.when("/login", { templateUrl: "views/login.html" });
    $routeProvider.when("/signup", { templateUrl: "views/signup.html", controller: "SignUpCtrl" });
    $routeProvider.when("/spash", { templateUrl: "views/spash.html", controller: "SplashCtrl" });
    $routeProvider.when("/todo", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/todo/:view", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/todo/:view/:itemid", { templateUrl: "views/todo.html", controller: "ToDoCtrl" });
    $routeProvider.when("/profile", { templateUrl: "views/profile.html", controller: "ProfileCtrl" });
}