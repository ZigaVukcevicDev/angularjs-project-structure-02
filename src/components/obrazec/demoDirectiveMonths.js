angular.module('demo').directive('demoDirectiveMonths', function() {
    return {
        template : '<div class="form-group"><label for="">Meseci</label><input type="number" input-text="{{ monthNumber }}" ng-model="monthNumber" ng-blur="months();" class="form-control" /><p>{{ month }}</p></div>',
        controller: function($scope) {
            $scope.months = function() {
                months = ['januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'];
                $scope.month = months[$scope.monthNumber - 1];
            }
        }
    };
})