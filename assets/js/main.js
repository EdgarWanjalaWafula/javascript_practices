'use strict'; 

// Initialize variables 
var carName; var carModel; var carType; var carOrigin; var carForm; var txt; var carObj; var carJSON; var cars;  

	try {
		
		// Add event litsener 
		document.getElementById("car_form").addEventListener("submit", saveCarData); 

		function saveCarData(e){

			// * Get form values
			carName = document.getElementById("car_name").value; 		
			carModel = document.getElementById("car_model").value; 		
			carType = document.getElementById("car_type").value; 		
			carOrigin = document.getElementById("car_origin").value; 	

			// Create object 
			carObj = {
				objName: carName, 
				objModel: carModel, 
				objType: carType, 
				objOrigin: carOrigin
			}

			// Check if data exists
			if(localStorage.getItem("cars") == null){
				cars = []; 
				cars.push(carObj); 
				localStorage.setItem("cars", JSON.stringify(cars)); 
			} else {
				cars = JSON.parse(localStorage.getItem("cars")); 
				cars.push(carObj); 
				localStorage.setItem("cars", JSON.stringify(cars)); 
			}

			// Clear form
			carForm = document.getElementById("car_form").reset(); 
			
			// Prevent default
			e.preventDefault();

			// Show results after adding data 
			fetchCars(); 
		}

	} catch (error) {
		document.getElementById("error").innerHTML = error.message; 
	}

	// Retrieve values from local storage 
	function fetchCars(){
		cars = JSON.parse(localStorage.getItem("cars"));  
		var carList = document.getElementById("result"); 
		carList.innerHTML = ""; 

		let index; 
		let carLength = cars.length; 
		let carnm; 
		let carmd; 
		let carty; 
		let caror; 

		for (index = 1; index < carLength; index++) {
			carnm = cars[index].objName; 
			carmd = cars[index].objModel; 
			carty = cars[index].objType; 
			caror = cars[index].objOrigin; 

			// Loop
			txt +=	"<tr>" +
						"<td scope='row'>" + index + "</td>" +
						"<td scope='row'>" + carnm + "</td>" +
						"<td>" + carmd + "</td>" + 
						"<td>" + carty + "</td>" +
						"<td>" + caror + "</td>" +
					"</tr>"; 
		}		
		
		document.getElementById("result").innerHTML = txt; 
	}
// saveCarData(); 
// var cars 		= ""; 
// var storeCars 	= ""; 

// cars = {
// 	name	: "subaru", 
// 	model	: "1999", 
// 	type	: "WRX STI", 
// 	origin	: "Japan", 
// 	gearbox	: "manual" 
// }

// storeCars = JSON.stringify(cars); 
// localStorage.setItem("carsData", storeCars); 

// try {
	
// 	var txt = "";
// 	var i = "";
// 	var len = ""; 

// 	var cars = ["subaru", "mitsubishi", "toyota", "ford", "ferarri", "nissan gtr", "mark x" ];  
// 	len = cars.length

// 	for (i = 0; i < len; i++) {
// 		if(i === 4){
// 			console.log(cars[i]); 
// 		}

// 		txt += "<li class='list-group-item'>" + cars[i] + "</li>"; 		
// 		document.getElementById("result").innerHTML = "<ul class='list-group list-flush text-capitalize'>" + txt + "</ul>"; 
// 		}
// 	} catch (error) {
// 		document.getElementById("error").innerHTML = error.message; 
// 	}

// document.getElementById("result").innerHTML = txt; 
// for (i = 0, len = cars.length; i < len; i++) {
//   text += cars[i] + "<br>";
// }

// console.log(txt); 

// var position = "";

// position = cars.indexOf("ford"); 

// console.log(position); 
// cars.forEach(listCars); 

// function listCars(value, index, array){
//   txt += index + "&nbsp" + value + "<br>"; 
// }

// document.getElementById("result").innerHTML = txt; 