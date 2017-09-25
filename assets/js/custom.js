(function($) {


	jQuery(document).ready(function(){
		// 	$('#h2').css("background", "url(./img/context-chats/context-chats-wall.jpg");
		// }
		var $animation_elements = $('.animation-element');
		var $window = $(window);

		function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);
		 
		  $.each($animation_elements, function() {
		    var $element = $(this);
		    var element_height = $element.outerHeight();
		    var element_top_position = $element.offset().top;
		    var element_bottom_position = (element_top_position + element_height);
		 
		    //check to see if this current container is within viewport
		    if ((element_bottom_position >= window_top_position) &&
		        (element_top_position <= window_bottom_position)) {
		      $element.addClass('in-view');
		    } else {
		      $element.removeClass('in-view');
		    }
		  });
		}

		$('#headerImg').hover(function(){
			$('#headerImg').get(0).src = "assets/img/self-wave.gif";
		}, function(){
			$('#headerImg').get(0).src = "assets/img/self-blinking.gif";
		});


		if ($("#portfolio-02").length == 1){
			$('#h2').css("background", "url(./assets/img/portfolio_02/portfolio_02_header.png)");
			$('#h2').css("background-size", "cover");
		}


		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
	}); 

		
})(jQuery);