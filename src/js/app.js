angular.module('Nursecare', [
  'ngRoute',
  'mobile-angular-ui',
  'Nursecare.controllers.Main',
  'Nursecare.Patientcontrollers',
  'Nursecare.Patientcontrollers'
])

.config(function($routeProvider) {
  $routeProvider.when('/', 
  	{ 
  		templateUrl:'home.html',  
  		reloadOnSearch: false
  	}).when('/patient',{
	  		templateUrl:'patient.html',
	  		reloadOnSearch: false
	  	}).when('/Calendrier',{
	  		templateUrl:'calendrier.html',
	  		reloadOnSearch: false
	  	}).otherwise({
                redirectTo: '/'
              })  
});