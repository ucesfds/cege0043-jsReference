function startup() {
	document.addEventListener('DOMContentLoaded',
	function() {
		getPort();
		trackAndPoly();
	}, false);
}

function trackAndPoly() {
	getPoi();
	trackLocation();
	//addPointLinePoly();
	//getEarthquakes();
	//loadW3HTML();
}

function loadW3HTML() {
	w3.includeHTML();
}