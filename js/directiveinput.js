(function(){
  var myApp = angular.module('myApp', []);
  myApp.directive('mySuperInput', function() {
    return{
      resctrict: 'EA',
      scope: true,
      template:'<input type = "text" ng-model = "textForTags" ng-keypress = "($event.which === 13)?tagsPush(textForTags):0"/>'+
      '<span ng-repeat = "ta in tag"><div class = tags><h4>{{ta.text}}</h4></div></span>',
      
      link:function(scope, element, attr){
        scope.text = 1;
        scope.tag = [];
        scope.tagsPush = function(text){
          scope.textForTags = "";
         
          if(scope.tag.length>0){
            var buff = {
              number: scope.tag.length+1,
              text: text
            };
            scope.tag.push(buff);
          }else{
            var buff  = {
              number: 1,
              text: text

            };
            scope.tag.push(buff);

          }
            
            
           // console.log(scope.tag);
          
        }
      //  console.log('work');
       // scope.test  = 'work';



      }
    }
    
  });
}());