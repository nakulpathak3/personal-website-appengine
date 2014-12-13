
$(document).ready(function() {
//accordion
	$('.contentone').hide();
	$('.contenttwo').hide();
	$('.contentthree').hide();
	$('.contentfour').hide();

	$('.list').hover(function() {
		$(this).css('opacity', '1');
	}, function() {
		$(this).css('opacity', '0.6');
	});

 	$('#accordion').accordion(
 	{
	 	collapsible: true,
	 	active: false,
	 	heightStyle: "content",
	 	activate: function( event, ui )
	 	 {
	 		if(ui.newHeader.prop("id") != undefined)
	 		{
	 			$('#skills').css('top', '267%');
		 			$('#sone').css('top', '285%');
		 			$('.contentone').css('top', '285%');
		 			$('#stwo').css('top', '315%');
		 			$('.contenttwo').css('top', '315%');
		 			$('#sthree').css('top', '345%');
		 			$('.contentthree').css('top', '345%');
		 			$('#sfour').css('top', '375%');
		 			$('.contentfour').css('top', '375%');
		 		$('#contact').css('top','415%');

		 		if ($(window).width() >= 1500)
		 			{
						$('.basic-grey').css('top','440%');
					}
					else
					{
			 			$('.basic-grey').css('top','440%');
		 			}

	 		}
	 		else
	 		{
	 			$('#skills').css('top', '200%');
		 			$('#sone').css('top', '220%');
		 			$('.contentone').css('top', '220%');
		 			$('#stwo').css('top', '250%');
		 			$('.contenttwo').css('top', '250%');
		 			$('#sthree').css('top', '280%');
		 			$('.contentthree').css('top', '280%');
		 			$('#sfour').css('top', '310%');
		 			$('.contentfour').css('top', '310%');
	 			$('#contact').css('top','350%');

		 			if ( $(window).width() >= 1500)
		 			{
						$('.basic-grey').css('top','375%');
					}
					else
					{
			 			$('.basic-grey').css('top','375%');
		 			}

	 		}
     	}
	 });

	 $('h3').hover(function() {
		$(this).css('color', '#100577');
	}, function() {
		$(this).css('color', '#444444');
	});

	$("#sone").click( function(event){
	event.preventDefault();

	if ($(this).hasClass("isDown") ) {
		$('.contentone').toggle('slide', {direction: 'left'}, 700);
		$(this).removeClass("isDown");
	}
	else {
		$('.contentone').toggle('slide', {direction: 'left'}, 700);
		$(this).addClass("isDown");
	}
	return false;
	});

	$("#stwo").click( function(event){
	event.preventDefault();

	if ($(this).hasClass("isDown") ) {
		$('.contenttwo').toggle('slide', {direction: 'right'}, 700);
		$(this).removeClass("isDown");
	}
	else {
		$('.contenttwo').toggle('slide', {direction: 'right'}, 700);
		$(this).addClass("isDown");
	}
	return false;
	});
	$("#sthree").click( function(event){
	event.preventDefault();

	if ($(this).hasClass("isDown") ) {
		$('.contentthree').toggle('slide', {direction: 'left'}, 700);
		$(this).removeClass("isDown");
	}
	else {
		$('.contentthree').toggle('slide', {direction: 'left'}, 700);
		$(this).addClass("isDown");
	}
	return false;
	});

	$("#sfour").click( function(event){
	event.preventDefault();

	if ($(this).hasClass("isDown") ) {
		$('.contentfour').toggle('slide', {direction: 'right'}, 700);
		$(this).removeClass("isDown");
	}
	else {
		$('.contentfour').toggle('slide', {direction: 'right'}, 700);
		$(this).addClass("isDown");
	}
	return false;
	});

	 $('#sone').hover(function() {
	 	if ( $(window).width() >= 1500)
		{
			$('#sone').css('font-size','250%');
		}
		else
		{
			$('#sone').css('font-size','220%');
		}
	}, function() {

	 	if ( $(window).width() >= 1500)
		{
			$('#sone').css('font-size','230%');
		}
		else
		{
			$('#sone').css('font-size','200%');
		}
	});

	 $('#stwo').hover(function() {
	 	if ( $(window).width() >= 1500)
		{
			$('#stwo').css('font-size','250%');
		}
		else
		{
			$('#stwo').css('font-size','220%');
		}
	}, function() {

	 	if ( $(window).width() >= 1500)
		{
			$('#stwo').css('font-size','230%');
		}
		else
		{
			$('#stwo').css('font-size','200%');
		}
	 });

	 $('#sthree').hover(function() {
	if ( $(window).width() >= 1500)
		{
			$('#sthree').css('font-size','250%');
		}
		else
		{
			$('#sthree').css('font-size','220%');
		}
	}, function() {

	 	if ( $(window).width() >= 1500)
		{
			$('#sthree').css('font-size','230%');
		}
		else
		{
			$('#sthree').css('font-size','200%');
		}
	 });

	 $('#sfour').hover(function() {
	if ( $(window).width() >= 1500)
		{
			$('#sfour').css('font-size','240%');
		}
		else
		{
			$('#sfour').css('font-size','220%');
		}
	}, function() {

	 	if ( $(window).width() >= 1500)
		{
			$('#sfour').css('font-size','225%');
		}
		else
		{
			$('#sfour').css('font-size','200%');
		}
	 });

});


