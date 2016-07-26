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

//function copy () {
	//document.getElementById.("reportcard").innerHTML = 
//}


//document.getElementById("name").onclick = addNameGrade;

//document.getElementById("grade").onclick = addNameGrade;

function addNameGrade () {
	
	var student = document.getElementById("Name").value;
	var grade = document.getElementById("Grade").value;

	if (grade >= 90) {
		grade = "A+";
	}
	else if (grade >= 85) {
		grade = "A-";
	}
	else if (grade >= 80) {
		grade = "B+";
	}
	else if (grade >= 75) { 
		grade = "B-";
	}
	else if (grade >= 70) {
		grade = "C+";
	}
	else if (grade >= 65) {
		grade = "C-";
	}
	else if (grade >= 60 ) {
		grade = "D+";
	}
	else if (grade >= 55) {
		grade = "D-";
	}
	else if (grade >= 0) {
		grade = "F";
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