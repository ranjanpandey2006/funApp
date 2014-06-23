var myapp = angular.module("myapp",[]);

var controllers = {};

controllers.SimpleController = function ($scope){
	
	/*alert("hi 1");
	 $http({
	        'url' : '/spring-mvc-hibernate-demo/customers.html',
	        'method' : 'GET',
	        
	    }).success(function(data){
	    	alert(data);
	        //$scope.marketForm.texts.push({'text' : data.text});
	    	$scope.customers = data;
	    });*/
	$scope.customers = [
	                    {name : "Ranjan Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Rahul Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Madhuri Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Pooja Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Alisha Patel" , city : "Jharsuguda" , pin : 768402},
	                    {name : "Abinash Patel" , city : "Jharsuguda" , pin : 768402}
	                    
	                    ];
};

controllers.TempController = function($scope){
	$scope.address = {addressLineOne : "This is address Line one", addressLineTwo : "This is address Line two",
			addressLineThree : "This is address Line Three",addressLineFour : "This is address Line Four"};
};
myapp.controller(controllers);

