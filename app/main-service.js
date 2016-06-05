angular.module("Pop-UpDevil")
.service('MainService', function () {
    var imgRoot = 'img/boxes/'
// build boxes
    var boxes = ['red', 'green', 'blue']
    
    var Box = function(color){
        var imgBase = imgRoot + color.slice(0,1).toUpperCase()+'W'
        this.title = color + ' box'
        this.imgs = {
            1: imgBase+'1.png',
            2: imgBase+'2.png',
            3: imgBase+'3.png',
            4: imgBase+'4.png'
        }
        this.character = imgBase +'M.png'
    }
    
    // builds cupboard
    
    this.getBoxes = function(){
        var cupboard = []
        for (var i = 0; i < 8; i++) {
            var randomBoxIndex = Math.floor(Math.random() * boxes.length)
            cupboard.push(new Box(boxes[i]))
        }
        var devilBoxIndex = Math.floor(Math.random() * cupboard.length)
        var color = cupboard[devilBoxIndex].title.slice(0,1).toUpperCase()
        cupboard[devilBoxIndex].character = imgRoot+color+'D.png'
        return cupboard
    }
    
})