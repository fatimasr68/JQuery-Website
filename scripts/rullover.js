a = 0;

$(document).ready(function(){

	init_slide();
	
	
	$('#ruller .alt').click( function(){
	
		if(a == 0)
		{	
			pause();				
		}
		
		else if(a == 1)
		{		
			play();			
		}	
	
	});
	
	
	$('#ruller .l_but').click(function(){	
		pause();
		go_prev();
	});
	
	
	$('#ruller .r_but').click(function(){		
		pause();
		go_next();
	
	});
	
	
});



p = null;

function pause() {

	clearInterval(p);

	$('#ruller .alt').css({backgroundImage:'url(icons/pause.png)'});
	
	a = 1;
}

function play() {

	p = setInterval('go_next()' , 3000);

	$('#ruller .alt').css({backgroundImage:'url(icons/play.png)'});
	
	a = 0;
}



function init_slide(){

	$('#ruller a:not(:first)').css({opacity:'0'});

	$('#ruller .des').html( $('#ruller a:first').find('img').attr('rel'));

	p = setInterval('go_next()' , 3000);
}



function go_next(){

	$('#ruller .caption').stop(true);

	current = $('#ruller a.show');
	
	next = current.next().hasClass('caption') ? $('#ruller a:first') :current.next();
	
	toz = next.find('img').attr('rel');
	
	current.removeClass('show').animate({opacity:'0'} ,2000);
	
	next.addClass('show').animate({opacity:'1'} ,2000);

	$('#ruller .caption').animate({width:'30%', right:'1000px'},0)
						 .animate({width:'80%', right:'80px'},2000)
						 .delay(1000)
						 .animate({right:'0px'}, 1000)
						 .animate({width:'0',right:'-1000px'}, 2000);

	$('#ruller .des').html(toz);
}



function go_prev(){

	$('#ruller .caption').stop(true);

	current = $('#ruller a.show');
	
	prev = current.prev().hasClass('panel') ? $('#ruller a:last') :current.prev();

	toz = prev.find('img').attr('rel');
	
	current.removeClass('show').animate({opacity:'0'}, 2000);
	
	prev.addClass('show').animate({opacity:'1'}, 2000);

	$('#ruller .caption').animate({width:'30%',right:'1000px'}, 0)
						 .animate({width:'80%', right:'80px'}, 2000)
						 .delay(1000)
						 .animate({right:'0px'}, 1000)
						 .animate({width:'0', right:'-1000px'}, 2000);

	$('#ruller .des').html(toz);
}

