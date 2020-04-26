toDoListApp.controller("ToDoCtrl", function($scope, $http){
    $scope.toDoList = [
        {name: "Change the bulbs", completed: false, deleted: false},
        {name: "Read twice a day", completed: false, deleted: false},
        {name: "See your mom", completed: false, deleted: false},
        {name: "flower the garden", completed: false, deleted: false},
        {name: "mow the lawn", completed: false, deleted: false}
    ];
    $scope.newToDo = {name: "", completed: false, deleted: false};

    $scope.createToDo = function(){
        $scope.toDoList.push({name: $scope.todoName, completed: false, deleted: false});
        $scope.todoName = ""
    };

    $scope.editToDo = function(){

    };

    $scope.deleteToDo = function(){

    };
    $scope.completeToDo = function(idx){
        $scope.toDoList[idx].completed = !$scope.toDoList[idx].completed;
    }
    
    function fetchToDos(){
        $http.get("someurl").success(function(){

        }).error(function(err, status) {

        });
    }

    // Constructor determines what to do
    function constructor(){
        $scope.newToDo = {name: "", completed: false, deleted: false};
    }
    constructor();
});