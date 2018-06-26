$(document).ready(function(){

	var colour;
	$( "#avatar" ).click(function() {
		var colours = ['#6ec6a5', '#8fc66e', '#bbc66e', '#796ec6', '#3F5B7A'];
		var randColour;
		do {
			randColour = colours[Math.floor(Math.random() * colours.length)];
		} while (colour == randColour);
		colour = randColour;
		$(".st9").attr("style", "fill:" + randColour);
	});

	// $("a").on('click', function(event) {
	//     // Make sure this.hash has a value before overriding default behavior
	//     if (this.hash !== "") {
	//       // Prevent default anchor click behavior
	//       event.preventDefault();

	//       // Store hash
	//       var hash = this.hash;

	//       // Using jQuery's animate() method to add smooth page scroll
	//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	//       // $('html, body').animate({
	//       //   scrollTop: $(hash).offset().top()
	//       // }, 1000, function(){
	   
	//         // Add hash (#) to URL when done scrolling (default click behavior)
	//         window.location.hash = hash;
	//       // });
	//     } // End if
 //  	});

    $('#accordion').find('.accordion-toggle').click(function(){

      $(this).next().slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
});

      //Hide the other panels
      $(".accordion-content").not($(this).next()).slideUp('fast');

    });

});