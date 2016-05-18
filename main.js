var currentID = 'home';


$(document).ready(function (){
    $('#' + currentID).fadeIn(500);

    $('.timelineButton').click(function(){

        if (!$(this).children().is(":visible"))
            $('.timelineButton').children('.details').hide("slide");

        $(this.children).show("slide");
    });

});

function show(elementID) {

    var ele = document.getElementById(elementID);
    if (!ele) {
        alert("no such element");
        return;
    }
    if (currentID != elementID){
    	$('#' + currentID).fadeOut(500, function(e){
			$('#' + elementID).fadeIn(500); 
    	}); 
    	currentID = elementID;
	}
	
}





