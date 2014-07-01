
$(document).ready(function(){
	var counter = 1;
		blink('.intro');

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

		counter = counter + 1;
		remove();
		
		$('.hadouken').finish().show()

		.animate(
			{'left': '300px'},
			500,
			function(){
				$(this).hide();
				$(this).css('left', '-212px');
				  
				  if(counter == 7) {
			        reset();
			        counter = 1
		          }
				
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

	.keyup(function(event) {
		if(event.which == 88) {
			$('.ryu-cool').hide();
			$('.ryu-ready').hide();
			$('.ryu-throwing').hide();
	        $('.ryu-still').show();
	    }
	});

// Fades out hte VS page.

	
$(document).keydown(function(event){
       if (event.which == 32) {
              $('#vs').fadeOut();
}
});


    // define variable to reuse
	var instruction = $('.instructions p')

	// The text instructions don't start until the VS page fade out.

	
    
		// Large collection of nested and method chained fade in/out and text replacements

     $('.logo').fadeIn(1800, function(){
      $('.instructions').delay(2000).fadeIn(1000, function(){
       $(instruction).delay(1500).fadeOut(1000, function(){
        $(instruction).text("Hover over Ryu to see him in action");
         $(instruction).delay(500).fadeIn(1000, function(){
	      $(instruction).delay(500).fadeOut(1000, function(){
	       $(instruction).text("Click on Ryu and he will Hadouken!!");
	        $(instruction).delay(500).fadeIn(1000,function() {
	         $(instruction).delay(500).fadeOut(function(){
              $(instruction).text("Press and hold X and he will pose for you!");
               $(instruction).delay(500).fadeIn(1000, function(){
                $(instruction).delay(500).fadeOut(2000);

       });
      });
	 });
  	});
   });
  });
 });
});



	
}); // end of document handler



function playHadouken() {
	$('#hadouken-sound')[0].volume = 0.5;
	$('#hadouken-sound')[0].load();
	$('#hadouken-sound')[0].play();

}

function remove() {
	$('.health-bar-right').delay(300).animate({'padding-left': '-=100px'});
}

function reset() {
	$('.health-bar-right').animate({'padding-left': '450px'});
	
}

function blink(selector){
    $(selector).animate({opacity:0}, 50, "linear", function(){
        $(this).delay(800);
        $(this).animate({opacity:1}, 50, function(){
        blink(this);
        });
        $(this).delay(700);
    });
}

