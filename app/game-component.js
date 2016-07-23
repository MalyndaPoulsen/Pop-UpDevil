
;(function () {
    angular.module('popUpDevil')
        .component('gameComponent', {
            controller: GameController,
            templateUrl: 'app/game-component.html',
        })
    function MainController($timeout, GameService) {
        var mc = this

        mc.cupboard = GameService.getBoxes()

        var guess = '';

        mc.points = 0;
        mc.victory = false;
        mc.sold = false;










        //     }
        // } ());
        // places boxes in cupboard
        // I need a function that starts music when game starts
        // an alert that asks the player if they are ready to start and tells them what the game is.
        // set victory to false,
        // I need a function that updates =total points,
        // I need a function that runs a css transition that animates the boxes
        // I need an on-click function that appends the image with the monkey or the devil(update)
        //     if it is the monkey you get an alert 'you have gained x points'- but you can't continue to hit that same box for more points!'
        //     id redeamed value = true or false

        // $('#cupboard')

        //     $('#boxes').on('click', '.box',function(){
        //         var box = $(this);
        //         var actualBox = getBoxById(box.id)
        //         if(actualBox.redeemed){
        //             alert("You've already cashed this box!")
        //             return 
        //         }
        //         actualBox.redeemed= true;

        //     })



    }
})