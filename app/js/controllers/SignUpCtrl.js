toDoListApp.controller("SignUpCtrl", function($scope, $location, $http){
    $scope.backClicked = function(){
        $location.path("/login");
    };

    $scope.handleRegister = function(){
        $location.path("/splash");
        return;
        //TODO: Configure backend & use below code to register new user
        var url = "";
       $http.post(url, $scope.user).then(function(resp){

       }).catch(function(error, status){
        //TODO: Handle error better
       })
    };

})