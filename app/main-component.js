
(function(){
    angular.module('Pop-UpDevil')
    .component('mainComponent',{
        templateUrl: 'app/main-component.html',
        controller: MainController,
    })
          function MainController(MainService){
           cupboard = MainService.getBoxes();
            totalViews = 0;
            attempts = 0;
            victory = false;
           
          var getBox = function(box){
               if(box.show == true){
                   return
               }
               box.show = true;
           }
       } 
}());