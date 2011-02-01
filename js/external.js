// Añade el atributo target dinamicamente a todos los enlaces en la pagina
// para forzar la apertura en una nueva ventana, y sin perder la validez como
// XHTML Strict.
function externalLinks() {
	if (!document.getElementsByTagName("a"));

	var anchors = document.getElementsByTagName("a");
	for (var i = 0; i < anchors.length; i++) {
		var anchor = anchors[i];
		if (anchor.getAttribute("href") &&
			anchor.getAttribute("rel") == "external")
			anchor.target = "_blank";
	}
}

window.onload = externalLinks;