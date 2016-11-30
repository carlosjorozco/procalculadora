window.onload=manejarClics;

var cifra1="";
var cifra2;
var control=true;


function manejarClics() {
	var cero=document.getElementById("num0");
	cero.addEventListener("click",function() {
								clicEn("0");
								});


	var uno=document.getElementById("num1");
	uno.addEventListener("click",function() {
								clicEn("1");
								});

	var dos=document.getElementById("num2");
	dos.addEventListener("click",function() {
								clicEn("2");
								});

	var tres=document.getElementById("num3");
	tres.addEventListener("click",function() {
								clicEn("3");
								});

	var cuatro=document.getElementById("num4");
	cuatro.addEventListener("click",function() {
								clicEn("4");
								});

	var cinco=document.getElementById("num5");
	cinco.addEventListener("click",function() {
								clicEn("5");
								});

	var seis=document.getElementById("num6");
	seis.addEventListener("click",function() {
								clicEn("6");
								});

	var siete=document.getElementById("num7");
	siete.addEventListener("click",function() {
								clicEn("7");
								});

	var ocho=document.getElementById("num8");
	ocho.addEventListener("click",function() {
								clicEn("8");
								});

	var nueve=document.getElementById("num9");
	nueve.addEventListener("click",function() {
								clicEn("9");
								});

	var suma=document.getElementById("ope1");
	suma.addEventListener("click",function(){
								clicEn("+");
							});


	var resta=document.getElementById("ope2");
	resta.addEventListener("click",function(){
								clicEn("-");
							});





	var multi=document.getElementById("ope3");
	multi.addEventListener("click",function(){
								clicEn("*");
							});

	var divi=document.getElementById("ope4");
	divi.addEventListener("click",function(){
								clicEn("/");
							});

	var calc=document.getElementById("num10");
	calc.addEventListener("click",calcular);

								
						
	var bor=document.getElementById("ope5");
	bor.addEventListener("click",borrar);

	var bo=document.getElementById("ope6");
	bo.addEventListener("click",det);

}

function clicEn(num){

	cifra1+=num;
	var resl=document.getElementById("pantalla");
	resl.textContent=cifra1;
	

	
}
function calcular(){
	var rest=eval(cifra1);
	var resl=document.getElementById("pantalla");
	resl.textContent=rest;
}
function borrar(){

	cifra1="";
  	var borr=("");
	var resl=document.getElementById("pantalla");
	resl.textContent=borr;
}


function det() {
	var resl=document.getElementById("pantalla");
	var ter=cifra1.slice(0,-1);
	cifra1=ter;
	resl.textContent=ter;

}