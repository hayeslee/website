$(document).ready(function (){

	// variables
	var sectionTopPosition;
	var sectionHeight;
	var scrollDivs;

	// initialize heights of sections
	initializeHeights();
	$('.modal').hide();

	// event listeners
	$( window ).resize(initializeHeights);
	$('a[href^="#"]').click(navigate);
	$('#container').scroll(scrollContainer);
	$('.icon').click(openNav);
	$('.close').click(closeModal);

	// masonry
	$('.grid').imagesLoaded().progress( function() {
		$('.grid').masonry({
		  itemSelector: '.grid-item',
		  columnWidth: 200,
		  gutter: 5
		});
	});

	$('.modal-mask').click(function(){
		if ($(event.target).hasClass('modal-mask'))
			closeModal();
	});

	$('.grid-item').click(function(){
		var index = $(this).data().index;
		$(".modals").show();
		$(".modal[data-index='" + index +"']").show();
	});

	// functions
	function scrollContainer(){
		// Get container scroll position
		var fromTop = $(this).scrollTop()+40;
		var cur;

		for (var index = 0; index < 4; index++){
			if (fromTop > sectionTopPosition[index] && fromTop < sectionTopPosition[index] + sectionHeight[index]){
				cur = scrollDivs[index];
				break;
			}
		}

		// Get the id of the current element
		var id = cur && cur.length ? cur[0].id : "";

		$('a[href^="#"]').removeClass("active");
		$("[href='#"+id+"']").addClass("active");
	}

	function navigate(){
		event.preventDefault();	
		var index = $($(this).attr('href')).index( ".section" );

		$('#container').animate({
			  scrollTop: sectionTopPosition[index]
		}, 1000);
	}

	// initialize all the heights for the sections to enable scrolling to correct position
	function initializeHeights(){
		sectionTopPosition = [$('#home').position().top, $('#life').position().top, $('#projects').position().top, $('#contact').position().top];
		sectionHeight = [$('#home').height(), $('#life').height(), $('#projects').height(), $('#contact').height()];
		scrollDivs = [$('#home'), $('#life'), $('#projects'), $('#contact')];

		$("[href='#home']").addClass("active");
	}

	function closeModal(){
		$(".modal").hide();
		$(".modals").hide();
	}

	/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
	function openNav() {
		event.preventDefault();
	  var x = document.getElementById("topNav");
	  if (x.className === "nav-top") {
	      x.className += " responsive";
	  } else {
	      x.className = "nav-top";
	  }
	}
}); 
