// Scrolling effects
$(window).scroll(function(){
	if ($(this).scrollTop() > 0 ){
		$('.navbar-inverse').removeClass('make-transparent');
	} else{
		$('.navbar-inverse').addClass('make-transparent');
	}
});


