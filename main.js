var currentID = 'home';


$(document).ready(function (){
    $('#' + currentID).fadeIn(500);
   
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





