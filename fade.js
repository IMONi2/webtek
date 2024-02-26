$(document).ready(function() {
	// Variabler för att hålla reda på om elementen är transparenta eller inte
	var img1Transp = false;
	var img3Transp = false;
    
	// Eventlyssnare för att hantera klick på img1
	$('#img1').click(function() {
	    if (img1Transp) {
		$('#img1').fadeTo(1000, 1);
		img1Transp = false;
	    } else {
		$('#img1').fadeTo(1000, 0.7); 
		img1Transp = true;
	    }
	});
    
	// Eventlyssnare för att hantera klick på img3
	$('#img3').click(function() {
	    if (img3Transp) {
		$('#img3').fadeTo(1000, 1); 
		img3Transp = false; 
	    } else {
		$('#img3').fadeTo(1000, 0.55); 
		img3Transp = true; 
	    }
	});
});