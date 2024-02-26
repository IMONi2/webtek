document.addEventListener('DOMContentLoaded', function() {
	const img2 = document.getElementById('img2');
    
	img2.addEventListener('click', function() {
	    if (img2.src.includes('pizza.jpg')) {
		img2.src = 'pizzaugn.jpg';
	    } else {
		img2.src = 'pizza.jpg'; 
	    }
	});
});