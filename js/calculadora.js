// Devuelve el IMC (Índice de Masa Corporal)
function getIMC() {
    var height = document.getElementById("altura").value;
    var weight = document.getElementById("peso").value;
    
    if (Number(height) && Number(weight)){
    height = height.replace(",",".");
    weight = weight.replace(",",".");
    var imc = (weight/(height*height)) * 10000
    
	document.getElementById("imc").innerHTML = (weight/(height*height)) * 10000;
	
	if (imc <= 18.5) {
	    document.getElementById("veredicto").innerHTML = "Bajo peso";
    }
    else if (18.5 < imc && imc < 24.99) {
	    document.getElementById("veredicto").innerHTML = "Normal";
    }
    else if (25 < imc && imc < 29.99) {
	    document.getElementById("veredicto").innerHTML = "Pre-obeso";
    }
    else if (30 < imc && imc < 34.99) {
	    document.getElementById("veredicto").innerHTML = "Obeso";
    }
    else if (35 < imc && imc < 39.99) {
	    document.getElementById("veredicto").innerHTML = "Obesidad mórbida";
    }
    else {
	    document.getElementById("veredicto").innerHTML = "Obesidad maligna";
    }
    }
    else {
        document.getElementById("imc").innerHTML = "Por favor introduce datos correctos!";
    }
}