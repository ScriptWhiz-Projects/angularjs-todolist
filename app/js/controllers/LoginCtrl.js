toDoListApp.controller("LoginCtrl", function($scope, $http, $alert, $location){
    $scope.user = {username: "", password: ""};
    //TODO: Link code to backend api hosted in heroku after completing it
    //TODO: Comment back in relevant code after completing backend api
    $scope.handleLogin = function(){
        localStorage.setItem("token", btoa($scope.user.username + ":" + $scope.user.password));
        $http.defaults.headers.common["Authorization"] = "Basic" + localStorage.getItem("token");

        /* var url = "";
        $http.get(url,).then(function(data){
            $alert({ content: 'Invalid username / password', duration: 5, placement: 'top-right', type: 'danger', show: true});
            //If use verification is successful, store user creds in localstorage as base64 encoded stuff
        }).catch(function(err, status){
            if(status === 0)
                $alert({ content: 'Oops! You seem to be offline! Check your connection & try again', duration: 5, placement: 'top-right', type: 'warning', show: true});
            else 
                $alert({ content: 'Invalid username / password', duration: 5, placement: 'top-right', type: 'danger', show: true});
        }); */
        $location.path("/splash");
    }
});