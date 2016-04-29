angular.module('controllers.index', [])
    .controller('IndexCtrl', function () {
        var vm = this

    })
    .directive('drawing', function () {
        return {
            controller: 'DrawingCtrl',
            link: function (scope, element) {
                var ctx = element[0].getContext('2d')
                element.on('mousedown', function (event) {
                    var image = scope.images[Math.floor(Math.random()*20)]
                    var width = (Math.random()*60) + 40
                    var height = (Math.random()*60) + 40
                    ctx.drawImage(image, event.offsetX-width/2, event.offsetY-height/2, width, height)
                })
            }
        }
    })
    .controller('DrawingCtrl', function ($scope) {
        var audio = new Howl({
            urls: ['/beethoven.ogg'],
            autoplay: true,
            loop: true,
            buffer: true,
            rate:10.0
        })
        audio.play()
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
