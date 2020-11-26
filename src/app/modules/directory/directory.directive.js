export const RandomNinjaDirective = () => {
    return {
        restrict: 'EA',
        scope: { // Isolate scope with outer
            title: '=',
            ninjas: '='
        },
        transclude: true,
        replace: true,
        templateUrl: 'views/directives/random-ninja.html',
        controller: ['$scope', ($scope) => {
            $scope.random = Math.floor(Math.random() * $scope.ninjas.length);
        }]
    }
};
