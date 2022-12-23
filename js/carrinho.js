function alterarcor(fullid){
	cor = $('#cor'+fullid).val();
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
function alterarvoltagem(fullid){
	voltagem = $('#voltagem'+fullid).val();
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
			document.location.reload(true);
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
function alterartamanhod(fullid){
	tamanho = $('#tamanhod'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterartamanho&fullid="+fullid+"&tamanho="+tamanho,dataType: "html",
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
function alterarquantidaded(fullid){
	quantidade = $('#quantidaded'+fullid).val();
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=alterarquantidade&fullid="+fullid+"&quantidade="+quantidade,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			document.location.reload(true);
			}
		});
	}	
	
function removerdocarrinho(fullid){
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=removerdocarrinho&fullid="+fullid,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			document.location.reload(true);
			}
		});
	}	
function irparaproduto(link){
	window.location.href = link;
	}
function adicionaraocarrinho(fullid){
	$.ajax({
		url: "../api/api.php",type: "GET",async: true,data: "metodo=adicionaraocarrinho&fullid="+fullid,dataType: "html",
		success: function(resposta){ resposta = resposta.trim();	
			document.location.reload(true);
			}
		});
	}
function carrosseldireita(){
	leftPos = $('.carrossel').scrollLeft();
	$(".carrossel").animate({scrollLeft: leftPos + 350}, 250);
	setTimeout(function(){
		if($('.carrossel')[0].scrollLeft!=0){
			$('#carrosselesquerda').show();
			}
		if($('.carrossel')[0].scrollLeft+$('.carrossel')[0].offsetWidth==$('.carrossel')[0].scrollWidth) {
			$('#carrosseldireita').hide();
			} 
		},300);		
	}
function carrosselesquerda(){
	leftPos = $('.carrossel').scrollLeft();
	$(".carrossel").animate({scrollLeft: leftPos - 350}, 250);
	setTimeout(function(){
		if($('.carrossel')[0].scrollLeft!=0){
			$('#carrosseldireita').show();
			}
		if($('.carrossel')[0].scrollLeft==0){
			$('#carrosselesquerda').hide();
			}
		},300);		
	}
jQuery(document).ready(function($){	
	$('#div-1-header-botao-caminhao').click(function(){
	 document.location.reload(true);
	});
	$("#botao-continuar-2").click(function(){
		$("#botao-continuar-2").css("display","none");
		$("#gif-carregando-2").css("display","block");
		window.setTimeout(function(){
			window.location.href = '../login';
			},1000);
		});
	$("#continuarcomprad").click(function(){
		window.setTimeout(function(){
			window.location.href = '../login';
			},500);
		});
		
});

