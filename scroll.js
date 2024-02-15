document.addEventListener("DOMContentLoaded", function() {
	var top = document.getElementById("scrollUp");
	var bottom = document.getElementById("scrollDown");
      
	// Show scroll buttons when user scrolls down
	window.addEventListener("scroll", function() {
	  if (window.scrollY > 200) { // Change 200 to whatever suits your layout
	    top.style.display = "block";
	    bottom.style.display = "block";
	  } else {
	    top.style.display = "none";
	    bottom.style.display = "none";
	  }
	});
      
	// Smooth scroll to top
	top.addEventListener("click", function() {
	  window.scrollTo({
	    top: 0,
	    behavior: "smooth"
	  });
	});
      
	// Smooth scroll to bottom
	bottom.addEventListener("click", function() {
	  window.scrollTo({
	    bottom: document.body.scrollHeight,
	    behavior: "smooth"
	  });
	});
      });