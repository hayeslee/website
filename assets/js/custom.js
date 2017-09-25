(function($) {


	jQuery(document).ready(function(){

		$('#headerImg').hover(function(){
			$('#headerImg').get(0).src = "assets/img/self-wave.gif";
		}, function(){
			$('#headerImg').get(0).src = "assets/img/self-blinking.gif";
		});

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
	}); 

		
})(jQuery);