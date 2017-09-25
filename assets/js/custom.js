(function($) {
	
	jQuery(document).ready(function(){

		$('#headerImg').hover(function(){
			$('#headerImg').get(0).src = "assets/img/self-wave.gif";
		}, function(){
			$('#headerImg').get(0).src = "assets/img/self-blinking.gif";
		});

	}); 

		
})(jQuery);