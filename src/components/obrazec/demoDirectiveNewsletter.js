angular.module('demo').directive('demoDirectiveNewsletter', function() {
    return {
        template : '<div class="form-group"><label for="">Prijava na newsletter</label><input type="text" input-text="{{ newsletterEmail }}" ng-model="newsletterEmail" class="form-control" /><button class="btn btn-primary" ng-click="submit();">Prijava</button></div>',
        controller: function($scope) {
            $scope.submit = function() {
                alert('Pošiljam: ' + $scope.newsletterEmail);
            }
        }
    };
})