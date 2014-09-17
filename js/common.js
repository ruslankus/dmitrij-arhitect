$(document).ready(function(e) {
    
	$('.meniu-item-heading  > a' ).click(function(e) {
		var panObj = $('#accordion .collapse');
		
		panObj.each(function() {
            if($(this).hasClass('in')){
				$(this).removeClass('in');	
			}
        });
		
        
    });
	
});//document ready
