$(document).ready(function(){
	
	// PARTE 1
	
	// Bloqueo del click en todos los botones
	$('#caja-01 a, #caja-02 a, #caja-03 a, #caja-04 a, #caja-05 a').click(function(){
		event.preventDefault();
	});
	
	// Funciones MouseOver y MouseLeave en los Puntos de Contacto
	$('#caja-01 a').mouseover(function(){
		$('#caja-01 div.info-interna').fadeIn(500);
	});
	
	$('#caja-01 a').mouseleave(function(){
		$('#caja-01 div.info-interna').fadeOut(500);
	});
	
	
	
	$('#caja-02 a').mouseover(function(){
		$('#caja-02 div.info-interna').fadeIn(500);
	});
	
	$('#caja-02 a').mouseleave(function(){
		$('#caja-02 div.info-interna').fadeOut(500);
	});
	
	
	
	$('#caja-03 a').mouseover(function(){
		$('#caja-03 div.info-interna').fadeIn(500);
	});
	
	$('#caja-03 a').mouseleave(function(){
		$('#caja-03 div.info-interna').fadeOut(500);
	});
	
	
	
	$('#caja-04 a').mouseover(function(){
		$('#caja-04 div.info-interna').fadeIn(500);
	});
	
	$('#caja-04 a').mouseleave(function(){
		$('#caja-04 div.info-interna').fadeOut(500);
	});
	
	
	
	$('#caja-05 a').mouseover(function(){
		$('#caja-05 div.info-interna').fadeIn(500);
	});
	
	$('#caja-05 a').mouseleave(function(){
		$('#caja-05 div.info-interna').fadeOut(500);
	});
	
	
	
	/* --------------- */
		
	// Navegación entre Vistas
	
	$('a#ver-fotos').click(function(){
		$('figure#caja-fotos').animate({
			left: 0
		},1000,'easeOutExpo');
		
		event.preventDefault();
	});
	
	$('a#ver-infografia').click(function(){
		$('figure#caja-fotos').animate({
			left: '100%'
		},1000,'easeOutExpo');
		
		event.preventDefault();
	});
});


































