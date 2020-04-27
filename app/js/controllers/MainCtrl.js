toDoListApp.controller("MainCtrl", function($scope){
    $scope.userLoggedIn = false;

    //Create base constructor that will determine if user is authenticated or guest to app
    //TODO: Add more scope to this controller
    function constructor(){
        if(localStorage.getItem("token"))
            $scope.userLoggedIn = true;
    }
    constructor();
})