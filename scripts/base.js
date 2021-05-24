flag = 1;

$(document).ready(function(){



	$('#minimize').click(function() {

		if(flag == 1)
		{
			$('#main_menu.scrolled').animate({height:'0px'}, 300)
									.queue(function(){
									
			$(this).css({border:'none', boxShadow:'none'}).dequeue();
			$('#main_menu.scrolled li').css({display:'none'});
		})
									
			$('#main_menu.scrolled .menu').animate({height:'0px', opacity:'0'}, 900);
			$('#minimize').animate({bottom:'-18px', opacity:'1'}, 600)
						  .css({fontSize:'14px', boxShadow:'0px 0px 2px 2px #ccc'})
						  .html('+');
						  
						  
			flag = 0;
		}
		
		else if( flag == 0)
		{
			$('#main_menu.scrolled').animate({height:'100px'}, 300)
									.css({border:'1px solid #eee', boxShadow:' 0 0 3px 2px #ccc inset, 0 0 2px 2px #ccc'});
			$('#main_menu.scrolled .menu').animate({height:'100px', opacity:'1'}, 900);
			$('#main_menu.scrolled li').css({display:'block'});
			$('#minimize').animate({bottom:'2px', opacity:'1'}, 600)
						  .css({fontSize:'18px', boxShadow:'1px -1px 2px 1px #eee'})
						  .html('-');
						  
			flag = 1;
		}

	});
	
	
	
});


//**************************************** onscrolled ********************************************
$(window).scroll( function() {
{

	//------------------------------ menu movement -----------------------------
	if ( $(window).scrollTop() > 230 )
	
	{		
		$('#main_menu').removeClass('original');
		$('#main_menu').addClass('scrolled');
		$('#main_menu').css({top:$(window).scrollTop() - 141 });
		$('#main_menu.scrolled').css({border:'1px solid #eee', boxShadow:' 0 0 3px 2px #ccc inset, 0 0 2px 2px #ccc'});
	}
	else
	{
		$('#main_menu').removeClass('scrolled');
		$('#main_menu').addClass('original');
		$('#main_menu').css({top:'0px'});
		
		$('#main_menu.original').css({height:'100px', opacity:'1'});
		$('#main_menu .menu').css({height:'100px', opacity:'1'});
		//$('#main_menu').css({ boxShadow:' -1px -1px 5px 1px #E6E6E6'});
		$('#main_menu li').css({display:'block'});

		$('#minimize').css({bottom:'2px', opacity:'1', fontSize:'18px', boxShadow:'1px -1px 2px 1px #eee'})
					  .html('-');
					  
		flag = 1;			  
	}

	//--------------------------------- to_top button --------------------------------
	
	if ( $(window).scrollTop() > 100 )
	{
		$('#to_top').css({height:'35px', opacity:'1'});
		$('#to_top').css({top:  $(window).innerHeight() + $(window).scrollTop() - 100 });
	}
	else
	{
		$('#to_top').css({height:'0', opacity:'0'});
		to_top.style.top = 200 + 'px';		
	}

	//-------------------------------- social icons -----------------------------------
	
	if ( $(window).scrollTop() < 100)
	{	
		$('#social').css({top:'350px'});
		$('#social').removeClass('end');
		$('#social').addClass('first');
		
	}

	else if ( $(window).scrollTop() > 100 && $(window).scrollTop() < 1100 )
	{
		$('#social').removeClass('end');
		$('#social').addClass('first');		
		$('#social').css({top: $(window).scrollTop() + 200 });
	}
	else 
	{
		$('#social').removeClass('first');
		$('#social').addClass('end');

	}

}


});