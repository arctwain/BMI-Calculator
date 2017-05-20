var standard = true;
var result = "", error = "";

function clearVal() {
	document.getElementById("bmiCalc").reset();
	document.getElementById("result").innerHTML = "";
	document.getElementById("error").innerHTML = "";
}

function swapVal(a,b,a1,b1,togBool) {
	standard = togBool;
	clearVal();
	document.getElementById(a).style.color = "#005A31";
	document.getElementById(b).style.color = "#000";
	document.getElementById(a1).style.display = "block";
	document.getElementById(b1).style.display = "none";
	document.getElementById("result").innerHTML = "";
	document.getElementById("error").innerHTML = "";
};

function stChange() {swapVal("stSel","metSel","standard","metric",true)};
function metChange() {swapVal("metSel","stSel","metric","standard",false)};

function myBMI() {
	
		var BMI;
		var d = {x:null,y:null,w:null};
		result = "", error = "";
		// Get data
		if(standard) {
				d.x = parseInt(document.getElementById("feet").value);
				d.y = parseInt(document.getElementById("inches").value);
				d.w = document.getElementById("weight").value;

		} else {
				d.x = document.getElementById("height-metric").value;
				d.y = 0;
				d.w = document.getElementById("weight-metric").value;
			} 

		// Calculate if error-free
	  if(!isNaN(d.x)&&!isNaN(d.y)&&!isNaN(d.w)&&d.x>0&&d.w>0) { 
			
			if(standard) {
				d.x = (d.x * 12 + d.y) * 2.54;
				d.w = d.w * 0.45359237;
			}
			
			BMI = (d.w/Math.pow(d.x/100,2)).toFixed(1);
			
			var bmiRange = function () {
				if(BMI>30) return "obese"
					else {
						if(BMI>25) return "overweight"
							else {if(BMI>18.5) return "normal"
								else return "underweight";
							}
						}
			}	 
			
			result = "BMI = "+BMI+" ("+bmiRange()+")";
		} else error = "Please enter correct information."
		
		// Write result or error
		document.getElementById("result").innerHTML = result;
		document.getElementById("error").innerHTML = error;
}
