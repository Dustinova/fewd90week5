// Your code here.

// FREEBIES! Blank-out the inputs onfocus.
document.getElementById("name").onfocus = clearName;
document.getElementById("grade").onfocus = clearGrade;

function clearGrade () {
	document.getElementById("grade").value = "";
}

function clearName () {
	document.getElementById("name").value + "";
}

function showRoster () {
	document.querySelector(".roster").classList.toggle("open");
	document.querySelector("#roster").classList.toggle("selected");
	document.querySelector(".assign").classList.remove("open");
	document.querySelector("#assign").classList.remove("selected");
}

document.getElementById("roster").onclick = showRoster;

function showInputs () {
	document.querySelector(".assign").classList.toggle("open");
	document.querySelector("#assign").classList.toggle("selected");
	document.querySelector(".roster").classList.remove("open");
	document.querySelector("#roster").classList.remove("selected");
}

document.getElementById("assign").onclick = showInputs;



function  () {
	
	var student = document.getElementById(" Name").value;
	var grade = document.getElementById("Grade").value;

	if (grade >= 90) {
		 return "A+";
	}
	else if (grade >= 85) {
		return "A-";
	}
	else if (grade >= 80) {
		return "B+";
	}
	else if (grade >= 75) { 
		return "B-";
	}
	else if (grade >= 70) {
		return "C+";
	}
	else if (grade >= 65) {
		return "C-";
	}
	else if (grade >= 60 ) {
		return "D+";
	}
	else if (grade >= 55) {
		return "D-";
	}
	else if (grade <= 50) {
		return "F";
	}

	else{
		return null 
	}

} 

document.getElementById("name").onclick = addNameGrade;

document.getElementById("grade").onclick = addNameGrade;

//function clearName() {
  //document.getElementById("name").value = "Joe";
//}

//function clearGrade() {
  //document.getElementById("grade").value = "72";
//}


//document.getElementById("target")somelist.innerHTML = message;