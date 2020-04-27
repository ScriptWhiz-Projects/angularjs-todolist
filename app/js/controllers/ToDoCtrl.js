toDoListApp.controller("ToDoCtrl", function($scope, $http, $modal){
    $scope.toDoList = [
        {name: "Change the bulbs", completed: false, deleted: false},
        {name: "Read twice a day", completed: false, deleted: false},
        {name: "See your mom", completed: false, deleted: false},
        {name: "flower the garden", completed: false, deleted: false},
        {name: "mow the lawn", completed: false, deleted: false}
    ];
    $scope.currentToDo = {};
    $scope.newToDo = {name: "", completed: false, deleted: false};

    $scope.createToDo = function(){
        if(!$scope.todoName) {
            return;
        }
            
        $scope.toDoList.push({name: $scope.todoName, completed: false, deleted: false});
        $scope.todoName = ""
    };

    $scope.editToDo = function(idx){
        if(idx !== undefined) {
            $scope.currentToDo = $scope.toDoList[idx];
            $scope.MessageModal = $modal({scope: $scope, template: "views/modals/EditToDoModal.html", show: true, animation: "am-fade-and-slide-top"});
        } else {
            var editedToDoIdx = $scope.toDoList.findIndex(function(todo){
                return todo.name === $scope.currentToDo.name
            });
            if(editedToDoIdx > -1) $scope.toDoList.splice(editedToDoIdx,1,$scope.currentToDo);
        }
        
    };

    //Handles deletion of todo. Modal pops up to ask user if they confirm delete action. Hides modal if user cancels
    $scope.deleteToDo = function(idx, deleteItem){
        if(deleteItem) {
            $scope.toDoList.splice($scope.currentIdx,1);
            $scope.currentIdx = null;
        } else {
            $scope.currentIdx = idx;
            $scope.MessageModal = $modal({scope: $scope, template: "views/modals/DeleteConfirmationModal.html", show: true, animation: "am-fade-and-slide-top"});
        }
    };

    $scope.completeToDo = function(idx){
        $scope.toDoList[idx].completed = !$scope.toDoList[idx].completed;
    }
    //TODO: Link method to fetch todo for a user once backend api is complete
    function fetchToDos(){
        var url = "";
        $http.get(url).success(function(){

        }).error(function(err, status) {

        });
    }
});