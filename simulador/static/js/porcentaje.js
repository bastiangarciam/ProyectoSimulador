function Calcular()
{   
    var buenas=35;
    var contador=0;
    resultadoFinal=0;

    var radio1 = document.pregun1.rad1.value;
    if(radio1!="c"){
        contador++;
    }
 
    var radio2 = document.pregun2.rad2.value;
    if(radio2!="d"){
        contador++;
    }
 
    var radio3 = document.pregun3.rad3.value;
    if(radio3!="d"){
        contador++;
    }
 
    var radio4 = document.pregun4.rad4.value;
    if(radio4!="a"){
        contador++;
    }
 
    var radio5 = document.pregun5.rad5.value;
    if(radio5!="d"){
        contador++;
    }
 
    var radio6 = document.pregun6.rad6.value;
    if(radio6!="d"){
        contador++;
    }
 
    var radio7 = document.pregun7.rad7.value;
    if(radio7!="c"){
        contador++;
    }
 
    var radio8 = document.pregun8.rad8.value;
    if(radio8!="b"){
        contador++;
    }
 
    var radio9 = document.pregun9.rad9.value;
    if(radio9!="c"){
        contador++;
    }
 
    var radio10 = document.pregun10.rad10.value;
    if(radio10!="d"){
        contador++;
    }
 
    var radio11 = document.pregun11.rad11.value;
    if(radio11!="b"){
        contador++;
    }
 
    var radio12 = document.pregun12.rad12.value;
    if(radio12!="a"){
                contador++;
    }
 
    var radio13 = document.pregun13.rad13.value;
    if(radio13!="a"){
                contador++;
    }
 
    var radio14 = document.pregun14.rad14.value;
    if(radio14!="a"){
                contador++;
    }
 
    var radio15 = document.pregun15.rad15.value;
    if(radio15!="a"){
                contador++;
    }
 
    var radio16 = document.pregun16.rad16.value;
    if(radio16!="a"){
                contador++;
    }
 
    var radio17 = document.pregun17.rad17.value;
    if(radio17!="a"){
                contador++;
    }
 
    var radio18 = document.pregun18.rad18.value;
    if(radio18!="a"){
                contador++;
    }
 
    var radio19 = document.pregun19.rad19.value;
    if(radio19!="a"){
                contador++;
    }
 
    var radio20 = document.pregun20.rad20.value;
    if(radio20!="a"){
                contador++;
    }
 
    var radio21 = document.pregun21.rad21.value;
    if(radio21!="a"){
                contador++;
    }
 
    var radio22 = document.pregun22.rad22.value;
    if(radio22!="a"){
                contador++;
    }
 
    var radio23 = document.pregun23.rad23.value;
    if(radio23!="a"){
                contador++;
    }
 
    var radio24 = document.pregun24.rad24.value;
    if(radio24!="a"){
                contador++;
    }
 
    var radio25 = document.pregun25.rad25.value;
    if(radio25!="a"){
                contador++;
    }
 
    var radio26 = document.pregun26.rad26.value;
    if(radio26!="a"){
                contador++;
    }
 
    var radio27 = document.pregun27.rad27.value;
    if(radio27!="a"){
                contador++;
    }
 
    var radio28 = document.pregun28.rad28.value;
    if(radio28!="a"){
                contador++;
    }
 
    var radio29 = document.pregun29.rad29.value;
    if(radio29!="a"){
                contador++;
    }
 
    var radio30 = document.pregun30.rad30.value;
    if(radio30!="a"){
                contador++;
    }
  
    var radio31 = document.pregun31.rad31.value;
    if(radio31!="a"){
                contador++;
    }
 
    var radio32 = document.pregun32.rad32.value;
    if(radio32!="a"){
                contador++;
    }
 
    var radio33= document.pregun33.rad33.value;
    if(radio33!="a"){
                contador++;
    }
 
    var radio34 = document.pregun34.rad34.value;
    if(radio34!="a"){
                contador++;
    }
 
    var radio35 = document.pregun35.rad35.value;
    if(radio35!="a"){
                contador++;
    }

    if(contador>1)
    {
     resultadoFinal=buenas-contador;
     alert("Obtuvo "+resultadoFinal+ " de 35 preguntas.");
     ValidarAprobado();
    }

    function ValidarAprobado()
    {
        if(contador>1)
        {
            resultadoFinal=buenas-contador;
            if(resultadoFinal>=33)
            {
             alert("Felicitaciones Aprobaste!!!");
			 detener();
            }
            else
            {
                alert("Sigue practicando!! REPROBADO")
				detener();
            }
        }
    }
 
}