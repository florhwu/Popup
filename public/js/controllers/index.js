angular.module('controllers.index', [])
    .controller('IndexCtrl', function ($log) {
        var vm = this

    })
    .directive('drawing', function ($log) {
        return {
            controller: 'DrawingCtrl',
            link: function (scope, element) {
                var ctx = element[0].getContext('2d')
                element.on('mousedown', function (event) {
                    var image = scope.images[Math.floor(Math.random()*20)]
                    
                    ctx.drawImage(image, event.offsetX-25, event.offsetY-25, 50, 50)
                })
            }
        }
    })
    .controller('DrawingCtrl', function ($scope, $document, $log) {
        $scope.images = []
        for (var i = 1; i <= 20; i++) {
            var name = i.toString()
            for (var x = name.length; x < 3; x++) {
                name = '0' + name
            }
            name += '.jpg'
            var image = new Image()
            image.src = '/img/'+name
            $scope.images.push(image)
        }
    })
