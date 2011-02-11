// Devuelve el IMC (Índice de Masa Corporal)
function getIMC() {

    var height = document.getElementById("altura").value;
    var weight = document.getElementById("peso").value;
    
    if (Number(height) && Number(weight)){
    height = height.replace(",",".");
    weight = weight.replace(",",".");
    var imc = Math.round(((weight/(height*height)) * 1000000)) /100;
    
	// document.getElementById("imc").innerHTML = (weight/(height*height)) * 10000;
	
	var resultado;
	if (imc <= 18.5) {
	    // document.getElementById("veredicto").innerHTML = "Bajo peso";
		// resultado = "Bajo peso <br / > ¿Te sientes muy flac@? ¿Tu problema no es peder peso, sino ganar? No importa, en Antares Mejoramiento Corporal también podemos ayudarte a subir de peso de forma sana y controlada";
		resultado = "Bajo peso";
    }
    else if (18.5 < imc && imc < 24.99) {
	    // document.getElementById("veredicto").innerHTML = "Normal";
		resultado = "Normal";
    }
    else if (25 < imc && imc < 29.99) {
	    // document.getElementById("veredicto").innerHTML = "Pre-obeso";
		resultado = "Pre-obeso";
    }
    else if (30 < imc && imc < 34.99) {
	    // document.getElementById("veredicto").innerHTML = "Obeso";
		resultado = "Obeso";
    }
    else if (35 < imc && imc < 39.99) {
	    // document.getElementById("veredicto").innerHTML = "Obesidad mórbida";
		resultado = "Obesidad mórbida";
    }
    else {
	    // document.getElementById("veredicto").innerHTML = "Obesidad maligna";
		resultado = "Obesidad maligna";
    }
    }
    else {
        document.getElementById("imc").innerHTML = "Por favor introduce datos correctos!";
    }

	imc = '<span>'+imc+'</span>' + '<br />' + resultado;
	document.getElementById("resultado").style.display= "block";
	document.getElementById("resultado").innerHTML = imc;
}