app.controller("MeterCtrl", ["$scope", function($scope) {

  var defaults = {
    size_x: 1, size_y: 2,
    update_interval: 10
  };

  if (!$scope.widget.id) {
    _.extend($scope.widget, defaults);
  }

}]);