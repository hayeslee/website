$(document).ready(function(){

	var colour;
	$( "#researcher" ).hover(function() {
 		$("#header-image").attr("src","assets/me-alternate.png");
	});
	$( "#avatar" ).click(function() {
		var colours = ['#6ec6a5', '#8fc66e', '#bbc66e', '#796ec6'];
		var randColour;
		do {
			randColour = colours[Math.floor(Math.random() * colours.length)];
		} while (colour == randColour);
		colour = randColour;
		$(".st9").attr("style", "fill:" + randColour);
	});

});