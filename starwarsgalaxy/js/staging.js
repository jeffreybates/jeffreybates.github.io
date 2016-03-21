var app = angular.module('plunker', []);

app.controller('MainCtrl', function($scope) {

  $scope.items = [];

  $scope.itemsToAdd = [{
    firstName: '',
    lastName: ''
  }];

  $scope.add = function(itemToAdd) {

    var index = $scope.itemsToAdd.indexOf(itemToAdd);

    $scope.itemsToAdd.splice(index, 1);

    $scope.items.push(angular.copy(itemToAdd))
  }

  $scope.addNew = function() {

    $scope.itemsToAdd.push({
      firstName: '',
      lastName: ''
    })
  }
});