
$(document).ready(function(){
		$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();
	
	})

	.mouseleave(function(){
		$('.ryu-still').show();
		$('.ryu-ready').hide();
		$('.ryu-cool').hide();
		$('.ryu-throwing').hide();

	})

	.mousedown(function(){
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.ryu-cool').hide();
		$('.ryu-still').hide();

		$('.hadouken').finish().show()

		.animate(
			{'left': '300px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '-212px');
			}
		);

	})

	.mouseup(function() {
        $('.ryu-throwing').hide();
        $('.ryu-ready').show();
        $('.ryu-cool').hide();
		$('.ryu-still').hide();
	});

$(document).keydown(function(event){
	if (event.which == 88) {
		$('.ryu-still').hide();
		$('.ryu-throwing').hide();
		$('.ryu-cool').show();
		$('.ryu-ready').hide();
			}
		
})

	.keyup(function() {
		if(event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
	        $('.ryu-still').show();
	    }
	});

	$(document).keydown(function(event){
		if (event.which == 32) {
		$('#vs').addClass('vs-transition');
		}
	});

	$('#vs').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function() {
    
	$('.logo').fadeIn(1800, function(){
		$('.instructions').fadeIn(1800).delay(2000).fadeOut(1800, function(){
			$(this).text("Hover over Ryu to see him in action").text("Test")
			.text("Click on Ryu and he will Hadouken!!")
			.text("Press and hold X and he will pose for you!");
      });
	});
  }); //End on on transitionEnd
	
}); // end of document handler

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();

}