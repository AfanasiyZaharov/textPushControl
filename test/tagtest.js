describe('Unit testing great quotes', function() {
	  var $compile,
	      $rootScope;
		var scope;
	  // Load the myApp module, which contains the directive
	  beforeEach(module('myApp'));

	  beforeEach(inject(function(_$compile_, _$rootScope_){
	    // The injector unwraps the underscores (_) from around the parameter names when matching
	    $compile = _$compile_;
	    //console.log($compile);
	    $rootScope = _$rootScope_;
	    scope = $rootScope;
	  }));
	  it('Replaces the element with the appropriate content', function() {
	    // Compile a piece of HTML containing the directive
	    var element = $compile("<my-super-input></my-super-input>")(scope);
	   console.log(scope);
	   	
	    console.log(element.scope().text);
	    
	     var obj  = element.find("input");
	    

	    obj.val('Sometext').triggerHandler('input');
	     obj.triggerHandler({type: 'keypress', which: 13, keyCode: 13})
   		//$rootScope.$apply();
   		//expect(element.scope().textForTags).toBe('Sometext');
   		expect(element.scope().tag.length).toBe(1);

	   	//console.log(obj);
	    //console.log(element.html());
	    //expect(element.html()).toContain('ng-model="textForTags"');
		//expect($rootScope.tag.length).toBe(1);


	  });
});