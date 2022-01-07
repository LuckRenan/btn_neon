/*
$(document).ready(function(){
	alert("Olá mundo!");
})

$(function(){
	alert("Olá mundo");
})

$(window).on('load',function(){
	alert("Olá mundo");
})
*/

$(function(){

	abrirJanela();
	verificarCliqueFechar();
	
	function abrirJanela(){

		$('.btn').click(function(){

			$('.bg').fadeIn();

		});


	}

	function verificarCliqueFechar(){
		
	}

});
