angular.module('controllers.index', [])
    .controller('IndexCtrl', function() {
        var vm = this
        vm.images = []
        for (var i = 1; i <= 20; i++) {
           var name = i.toString()+'.jpg'
           for (var i = name.length; i < 3; i++) {
               name = '0'+name
           }
           vm.images.push(name)
        }
    })
    .directive('drawing', function($log) {
        return {
            link: function(scope, element) {
                var ctx = element[0].getContext('2d')
                element.on('mousedown', function(event) {
                    
                    ctx.pus
                })
            }
        }
    })
    .service('')
