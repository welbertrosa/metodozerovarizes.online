function getstr(inicio,fim,string){
	str = string.split(inicio);
	str = str[1];
	str = str.split(fim);
	str = str[0];
	return str; 
	}
function online(local){
	largura = window.screen.width;
	altura = window.screen.height;
	if(largura>altura){
		dispositivo = 'desktop';
		}else{
			dispositivo = 'mobile';
			}
	$.ajax({
		url: '../api/api.php',type:'GET',async:true,data: 'metodo=online&local='+local+'&dispositivo='+dispositivo,dataType:'html',
		success: function(resposta){ resposta = resposta.trim();
			}});
	return;
	}
function setcookie(cookie_,conteudo){
	document.cookie = cookie_+'='+conteudo+';path:/;';
	return;
	}
function getcookie(c){
	retorno = 'null';
	cookies = decodeURIComponent(document.cookie);
	if(cookies.includes(c)){
		retorno = getstr(c+'=',';',cookies);
		}
	return retorno;
	}
jQuery(document).ready(function($){
	
	$('.item_menu').click(function(){
		return;
		item = $(this).attr('data-value');
		if(!confirm("Se vocÃª continuar vocÃª nÃ£o participarÃ¡ da promoÃ§Ã£o!")){return;}
		window.location.href = 'https://m.casasbahia.com.br/?filtro=c'+item;
		});
	
	$("#div-1-header-menu").click(function(){
		$("#id-menu").css("display","block");
		document.body.style.overflow = 'hidden';
		$("#campo-fixo-comprar").css("display","none");
	});
	$("#fecha-menu").click(function(){
			$("#id-menu").css("display","none");
			document.body.style.overflow = 'scroll';
			$("#campo-fixo-comprar").css("display","block");
		});
	$("#fecha-o-menu").click(function(){
			$("#id-menu").css("display","none");
			$("#body").css("overflow","scroll");
			$("#campo-fixo-comprar").css("display","block");
		});
	$("#div-1-header-botao-pesquisar").click(function(){
		display = $("#div-1-header-area-de-pesquisa").css("display");
		if(display=="none"){
			$("#div-1-header-area-de-pesquisa").css("display","flex");
			}else{
				$("#div-1-header-area-de-pesquisa").css("display","none");
				}
		});

$('.item_menu_2').click(function(){
		return;
		item = $(this).attr('data-value');
		if(!confirm('Se vocÃª continuar vocÃª nÃ£o participarÃ¡ da promoÃ§Ã£o!')){return;}
		if(item.includes('ttps')){window.location.href = item;return;}
		window.location.href = "https://www.casasbahia.com.br/"+item;
		});
	$("#botao-calcular-frete").click(function(){
		cep = $('#inputcep').val().length;
		if(cep<8 || cep>9){
			alert('Insira um CEP vÃ¡lido!');
			return;
			}
		$("#botao-calcular-frete").css("display","none");
		$("#gif-carregando").css("display","block");
		window.setTimeout(function(){
			$("#botao-calcular-frete").css("display","block");
			$("#gif-carregando").css("display","none");
			$("#valor-do-frete").css("display","block");
			},1000);
		});
});
