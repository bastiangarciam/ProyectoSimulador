//window.onload = function()
function Validar2()
{ 
	var contador=0;
	var TipoPregunta="";
	//Intanciamos a Boton1 con el boton cuyo id="botonEnviar "
 //var boton1 = document.getElementById("botonEnviar");
 //var boton2 = document.getElementById("botonEnviar");


//Creamos una funcion que se active cuando pulsen el boton "ver resultados"
 // boton1.onclick = function()
  //{  
	  //Validar si el name de la pregunta es true o false
var radio1 = document.pregun1.rad1.value;
if(radio1==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio2 = document.pregun2.rad2.value;
if(radio2==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio3 = document.pregun3.rad3.value;
if(radio3==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio4 = document.pregun4.rad4.value;
if(radio4==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio5 = document.pregun5.rad5.value;
if(radio5==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio6 = document.pregun6.rad6.value;
if(radio6==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio7 = document.pregun7.rad7.value;
if(radio7==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio8 = document.pregun8.rad8.value;
if(radio8==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio9 = document.pregun9.rad9.value;
if(radio9==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio10 = document.pregun10.rad10.value;
if(radio10==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio11 = document.pregun11.rad11.value;
if(radio11==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio12 = document.pregun12.rad12.value;
if(radio12==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio13 = document.pregun13.rad13.value;
if(radio13==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio14 = document.pregun14.rad14.value;
if(radio14==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio15 = document.pregun15.rad15.value;
if(radio15==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio16 = document.pregun16.rad16.value;
if(radio16==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio17 = document.pregun17.rad17.value;
if(radio17==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio18 = document.pregun18.rad18.value;
if(radio18==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio19 = document.pregun19.rad19.value;
if(radio19==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio20 = document.pregun20.rad20.value;
if(radio20==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio21 = document.pregun21.rad21.value;
if(radio21==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio22 = document.pregun22.rad22.value;
if(radio22==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio23 = document.pregun23.rad23.value;
if(radio23==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio24 = document.pregun24.rad24.value;
if(radio24==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio25 = document.pregun25.rad25.value;
if(radio25==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio26 = document.pregun26.rad26.value;
if(radio26==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio27 = document.pregun27.rad27.value;
if(radio27==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio28 = document.pregun28.rad28.value;
if(radio28==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio29 = document.pregun29.rad29.value;
if(radio29==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio30 = document.pregun30.rad30.value;
if(radio30==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio31 = document.pregun31.rad31.value;
if(radio31==false){
	contador++;}
	
  //Validar si el name de la pregunta es true o false
	var radio32 = document.pregun32.rad32.value;
if(radio32==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio33 = document.pregun33.rad33.value;
if(radio33==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio34 = document.pregun34.rad34.value;
if(radio34==false){
	contador++;}

  //Validar si el name de la pregunta es true o false
	var radio35 = document.pregun35.rad35.value;
if(radio35==false){
	contador++;}



//Contador que escriba que determina si falta 1 pregunta escribira "Pregunta" de lo contrario si es > a 1 escribira "Preguntas".
if(contador>1){
	TipoPregunta="preguntas";
}
else
{
	TipoPregunta="pregunta";
}
//Fin contador TipoPregunta.



//Contador que lanza error de preguntas sin responder
	if(contador>0){
		

	alert("Error!!   Faltan "+contador+" "+TipoPregunta+" por responder.");
//Aqui esta volviendo a 0 el contador de sin responder para poder tener un control actualizado.
	contador=0;
	//Aqui esta volviendo sin datos para que vuelva a determinar el contador de TipoPregunta.
	TipoPregunta="";
}
//Fin contador.
  }

//}