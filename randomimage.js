function randomImage(){
	var total=3;
	var randN = Math.random();
	var randIndex = Math.floor(randN*total)
	var container = document.getElementById("container");

	switch(randIndex){
		case 0:
			img1.src = "pizzaugn.jpg";
			img1.alt = "item 1"
			break;
		case 1: 
			img1.src = "pizza.jpg";
			img1.alt = "item 2";
			break;
		case 2: 
			img1.src ="deg.jpg";
			img1.alt = "item 3"
			break;
		default:
			container.innerHTML = "No item available"
	}
}
window.onload = randomImage;