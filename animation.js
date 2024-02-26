$(document).ready(function() {
	var $animation = $("#animation");
    
	function animating() {
	    $animation.animate({
		width: "100vw",
		height: "2vw"
	    }, {
		duration: 1000,
		step: function(now, fx) {
		    if (fx.prop === "width" && now === 100) {
			$animation.css("background-color", "blue");
		    }
		},
		complete: function() {
		    $animation.animate({
			width: "1vw",
			height: "2vw"
		    }, {
			duration: 1000,
			step: function(now, fx) {
			    if (fx.prop === "width" && now === 1) {
				$animation.css("background-color", "red");
			    }
			},
			complete: animating
		    });
		}
	    });
	}
	animating();
    });