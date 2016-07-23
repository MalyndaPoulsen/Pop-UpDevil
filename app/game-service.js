;(function (){
    angular.module('popUpDevil')
    .service('GameService', function(){
        var imgRoot = 'img/boxes/'


function Cupboard(){
    this.boxes = [{
        color: 'Red',
        wind: imgRoot + 'R'+'W',
        monkey: imgRoot + 'R'+'M'+'.png',
        devil: imgRoot + 'R'+'D'+'.png',

    },{
          color: 'Green',
        wind: imgRoot + 'G'+'W',
        monkey: imgRoot + 'G'+'M'+'.png',
        devil: imgRoot + 'G'+'D'+'.png',
    },{
          color: 'Blue',
        wind: imgRoot + 'B'+'W',
        monkey: imgRoot + 'B'+'M'+'.png',
        devil: imgRoot + 'R'+'D'+'.png',
    }]
}



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
    

    
    this.getBoxes = function(){
        var cupboard = []
        for (var i = 0; i < 8; i++) {
            var randomBoxIndex = Math.floor(Math.random() * boxes.length)
            cupboard.push(new Box(boxes[i]))
        }
        var devilBoxIndex = Math.floor(Math.random() * cupboard.length)
        var color = cupboard[devilBoxIndex].title.slice(0,1).toUpperCase()
        cupboard[devilBoxIndex].character = imgRoot+color+'D.png'
    }
    console.log(cupboard)
    return cupboard





    })

}())




// (function(){

//     var imgRoot = 'img/boxes/'
// // build boxes
//     // builds cupboard
    
    
// }())
