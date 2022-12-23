function alterarcor(fullid){
	cor = $('#cor'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarcor&fullid="+fullid+"&cor="+cor,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterarcord(fullid){
	cor = $('#cord'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarcor&fullid="+fullid+"&cor="+cor,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterartamanho(fullid){
	tamanho = $('#tamanho'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterartamanho&fullid="+fullid+"&tamanho="+tamanho,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterartamanhod(fullid){
	tamanho = $('#tamanhod'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterartamanho&fullid="+fullid+"&tamanho="+tamanho,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterarvoltagem(fullid){
	voltagem = $('#voltagem'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarvoltagem&fullid="+fullid+"&voltagem="+voltagem,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterarvoltagemd(fullid){
	voltagem = $('#voltagemd'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarvoltagem&fullid="+fullid+"&voltagem="+voltagem,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}
function alterarquantidade(fullid){
	quantidade = $('#quantidade'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarquantidade&fullid="+fullid+"&quantidade="+quantidade,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}	
function alterarquantidaded(fullid){
	quantidade = $('#quantidaded'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarquantidade&fullid="+fullid+"&quantidade="+quantidade,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}	
function alterarquantidadep(fullid){
	quantidade = $('#quantidadep'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarquantidade&fullid="+fullid+"&quantidade="+quantidade,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			}
		});
	}	
function irparaproduto(link){
	window.location.href = link;
	}	
function adicionaraocarrinho(fullid){
	cor = $('#cor'+fullid).val();
	tamanho = $('#tamanho'+fullid).val();
	voltagem = $('#voltagem'+fullid).val();
	quantidade = $('#quantidade'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=adicionaraocarrinho&fullid="+fullid+'&cor='+cor+'&tamanho='+tamanho+'&voltagem='+voltagem+'&quantidade='+quantidade,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			window.location.href = '../carrinho';
			}
		});
	}	
jQuery(document).ready(function($){
	$('#detalhes').click(function(){
		$('#campodetalhes').show(150);
		window.scrollTo(0,0);
		setTimeout(function(){	document.documentElement.style.overflow = 'hidden'; },250);
		});
	$('#caracteristicas').click(function(){
		$('#campocaracteristicas').show(150);
		window.scrollTo(0,0);
		setTimeout(function(){	document.documentElement.style.overflow = 'hidden'; },250);
		});
	$('.voltar').click(function(){
		$('#campocaracteristicas').hide(150);
		$('#campodetalhes').hide(150);
		window.scrollTo(0,1250);
		setTimeout(function(){	document.documentElement.style.overflow = 'scroll'; },250);
		});
	
	$('.botao-comprar').click(function(){
		window.location.href = '../carrinho';
		});
	$("#botao-comprar").click(function(){
		$("#botao-comprar").css("display","none");
		$("#gif-carregando-pv").css("display","block");
		window.setTimeout(function(){
			window.location.href = '../carrinho';
			},1000);
	});

	$("#botao-comprar2").click(function(){
		$("#botao-comprar2").css("display","none");
		$("#gif-carregando-pv2").css("display","block");
		window.setTimeout(function(){
			window.location.href = '../carrinho';
			},1000);
	});
	$("#ver-mais-detalhes").click(function(){
		$("#campo-com-detalhes").css("height","100%");
		$("#ver-mais-detalhes").text("");
		});
	$("#ver-mais-caracteristicas").click(function(){
		$("#campo-com-caracteristicas").css("height","100%");
		$("#ver-mais-caracteristicas").text("");
		});
	$("#faÃ§a-uma-pergunta").click(function(){
		$("html,body").animate({scrollTop:0},'slow');
		$("html,body").animate({scrollTop:0},'slow');
		});
	$("#imagens-do-produto").owlCarousel({
          navigation : true,
          slideSpeed : 300,
          paginationSpeed : 400,
          singleItem:true,
          items : 1});
});
