
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

	$('.main').animate({
		'opacity': '1',
	}, 3000);
	
});

function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();

}