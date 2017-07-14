
			$(document).ready(function(){
	
				$('.js--add-sticky-nav').waypoint(function(direction){
					if(direction == "down"){
						$('.navigatio').addClass('sticky-nav');
					}else{
						$('.navigatio').removeClass('sticky-nav');
					}
				});



					
	
	$("a").click(function() {
		var _id = "home_scroll";
    	if(this.id == 'portfolio_scroll' || this.id == 'about_scroll' || this.id == 'contact_scroll' || this.id == 'home_scroll'){
			
		var _id = this.id;
//			alert(_id);
							// Add smooth scrolling to all links
 $("#"+_id).on('click', function(event) {
	 // Make sure this.hash has a value before overriding default behavior
	 if (this.hash !== "") {
		 // Prevent default anchor click behavior
		 event.preventDefault();
		 // Store hash
		 var hash = this.hash;
		 // Using jQuery's animate() method to add smooth page scroll
		 // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
		 $('html, body').animate({
			 scrollTop: $(hash).offset().top
		 }, 800, function(){
			 // Add hash (#) to URL when done scrolling (default click behavior)
			 window.location.hash = hash;
		 });
	 } // End if
	 
 });
			
		}else {}
	});
				
 });


			
