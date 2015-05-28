angular.module('demo').directive('demoDirectiveCounter', function() {
    return {
        scope : { inputText: '@' },
        template : '<p ng-class="{ \'text-success\' : inputText > 0, \'text-danger\' : inputText > 10 }">Število znakov: {{ inputText }}</p>'
    };
})