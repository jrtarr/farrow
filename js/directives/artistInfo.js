app.directive('artistInfo', function(){
  return{
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/artistInfo.html'
  };
});