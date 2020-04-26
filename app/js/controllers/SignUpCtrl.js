toDoListApp.controller("SignUpCtrl", function($scope, $location, $http){
    $scope.backClicked = function(){
        $location.path("/login");
    };

    $scope.handleRegister = function(){
        $location.path("/splash");
        return;
        //TODO: Add proper functionality once backend is done
        var url = "";
       $http.post(url, $scope.user).then(function(resp){

       }).catch(function(error, status){
        alert("Error!")
       })
    };

})