angular.module('controllers.index', [])
    .controller('IndexCtrl', function() {
        var vm = this
        this.message = 'Hello World'
    })
    .directive('drawing', function($log) {
        return {
            link: function(scope, element) {
                var ctx = element[0].getContext('2d')
                element.on('mousedown', function(event) {
                    $log.log(event.clientX, event.clientY)
                })
            }
        }
    })