function SimpleController($scope){
	
	$scope.customers = [
	                    {name : "Ranjan Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Rahul Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Madhuri Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Pooja Pandey" , city : "Sambalpur" , pin : 768001},
	                    {name : "Alisha Patel" , city : "Jharsuguda" , pin : 768402},
	                    {name : "Abinash Patel" , city : "Jharsuguda" , pin : 768402}
	                    
	                    ];
	$scope.testButton = function(){
	alert("hi");
		alert($scope.test);
		$scope.test = '';
	};
		
}

