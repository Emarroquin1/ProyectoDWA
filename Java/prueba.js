var concatenacion='';
function obtenerFechaFinal(){


    var fechaFinal = '2022-10-04T04:08:01.000Z'
    
    fechaFinal = new Date(fechaFinal);
    
    
    
    
    
       
        var mes = fechaFinal.getMonth(); //obteniendo mes
        var dia = fechaFinal.getDate(); //obteniendo dia
        var ano = fechaFinal.getFullYear(); //obteniendo año
        var hora = fechaFinal.getHours(); //obteniendo hora
        var minutos = fechaFinal.getMinutes(); //obteniendo minuto
        var segundos = fechaFinal.getSeconds(); //obteniendo minuto
    
    
       var  validadorFecha=ano+"-"+minTwoDigits(mes)+"-"+minTwoDigits(dia)+" "+minTwoDigits(hora)+":"+minTwoDigits(minutos)+":"+minTwoDigits(segundos);
    console.log(validadorFecha);
    }

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
      };
      var array=[];
      var array2=[];

function convertirTexto(texto){



let validador =2;
for (var i=0; i<=(texto.length); i++){
if(texto[i]!=' '){

    if(texto[i]!=null && texto[i]!=undefined){
        array.push(texto[i]);
        validador =1;
    }
}else if(texto[i]==' '){
    
    
    if(validador==1){
        array2.push(array.join(''));
        array =[];
        validador =2
    }
   

}

}

if(validador==1){
    array2.push(array.join(''));
    array =[];

}

for(e in array2){
 if(e==0){
concatenacion=array2[e];
 }else{
    concatenacion+='%20'+array2[e];
 }
    

}

return concatenacion;


}

      obtenerFechaFinal();

      function paisesFind(pais){

        for (a in paises) {
     

            if(pais==paises[a].nombre)
            {
              
var acronimo = paises[a].acronimo;                

            }

        }

        return acronimo;
        
      }




document.getElementById("btnBuscar").addEventListener('click',function(e){
    e.preventDefault();

    divJobs.innerHTML='';
    let texto2 = document.getElementById("txtSearch");

    texto2.value=convertirTexto(texto2.value);
    let selectPaises =document.getElementById("selectPaises");
    
    alert(paisesFind(selectPaises.value));
    

})