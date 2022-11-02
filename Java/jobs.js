var divJobs = document.getElementById('divJobs');

function obtenerFechaFinal(fecha){


    var fechaFinal = fecha
    
    fechaFinal = new Date(fechaFinal);
    
    
    
    
    
       
        var mes = fechaFinal.getMonth(); //obteniendo mes
        var dia = fechaFinal.getDate(); //obteniendo dia
        var ano = fechaFinal.getFullYear(); //obteniendo año
        var hora = fechaFinal.getHours(); //obteniendo hora
        var minutos = fechaFinal.getMinutes(); //obteniendo minuto
        var segundos = fechaFinal.getSeconds(); //obteniendo minuto
    
    
       var  validadorFecha=ano+"-"+minTwoDigits(mes)+"-"+minTwoDigits(dia)+" "+minTwoDigits(hora)+":"+minTwoDigits(minutos)+":"+minTwoDigits(segundos);
   return validadorFecha;
    }

    function minTwoDigits(n) {
        return (n < 10 ? '0' : '') + n;
      };

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab3a0ceb1msh6a9c1937f6fa475p150d73jsnafb7fa0e2e9d',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1', options2)
	.then(response => response.json())
	.then(response => {console.log(response)

        /*codigo para obtener las  Calificaciones o habilidades*/ 
      
        for (var i = 0; i < response['data'].length; i++) {

            let Qualifications =[];
            
            if( Object.entries(response['data'][i].job_highlights).length==0){
                Qualifications.push('There are not anyqualifications')
            }else{

                for (let e = 0; e < response['data'][i].job_highlights.Qualifications.length; e++) {

                    Qualifications.push (response['data'][i].job_highlights.Qualifications[e]);
                    
                    
                    }
            
            
            }
console.log(Qualifications);
                 /*END of codigo para obtener las  Calificaciones o habilidades*/ 

     /*codigo para obtener la  Experiencia requerida por el empleador*/ 

     let experience ='';
            if(response['data'][i].job_required_experience.no_experience_required==true){
experience='This position no required anyexperience'
            }else if (response['data'][i].job_required_experience.no_experience_required==false)
            
            {
                if(response['data'][i].job_required_experience.required_experience_in_months!=null &&
                response['data'][i].job_required_experience.required_experience_in_months!='')
                {
                experience='This position required '+
                response['data'][i].job_required_experience.required_experience_in_months+' months of experiences'
            }else {
                experience="This position doesn't specify any labor experience, but is a required"
            }

        }
            console.log(experience);
    /*END OF codigo para obtener la  Experiencia requerida por el empleador*/ 

        /*codigo para obtener el tipo de empleo*/ 
            let remoto ='';
            if(response['data'][i].job_is_remote==true){

                remoto='This job is available to work from a remote way'

            }else if(response['data'][i].job_is_remote==false){
                remoto='This job is not available to work from a remote way'
            }

            console.log(remoto);
  /*End of codigo para obtener el tipo de empleo*/ 
  console.log(response['data'][i]);
  console.log(response['data'][i].employer_name);
 
let fecha =  obtenerFechaFinal(response['data'][i].job_posted_at_datetime_utc)
  
        divJobs.innerHTML+='<h3 style="text-align: center;">'+response['data'][i].job_title+'</h3>'+
        '<p>Posted date: '+fecha+'</p>'+   
           '<div style="text-align: center;"><img class="imgLogo" src="'+response['data'][i].employer_logo+'" alt="logo">'+
           '<p>Employer Name: '+response['data'][i].employer_name+'</p></div>'+ 
           '<p>Job publisher: '+response['data'][i].job_publisher+'</p>'+
         '<p>Job description: '+response['data'][i].job_description+'</p>';
       
         divJobs.innerHTML+='<h3>Qualifications.</h3>'
         
         for(value in Qualifications){
             divJobs.innerHTML+='<p>'+(parseInt(value)+1)+'. '+Qualifications[value]+'</p>'
        }
        divJobs.innerHTML+='<p>Experience: '+experience+'</p>'+
        '<p>Country: '+response['data'][i].job_country+'</p>'+
        '<p>Remote work: '+remoto+'</p>'+
        '<p>URL to apply: <a target="_blank" href="'+response['data'][i].job_apply_link+
        '">Click here to apply</a></p>  <hr>';
        
}
    
    })
	.catch(err => console.error(err));

    




    var concatenacion='';
    var array=[];
    var array2=[];

    function paisesFind(pais){

        for (a in paises) {
     

            if(pais==paises[a].nombre)
            {
              
var acronimo = paises[a].acronimo;                

            }

        }

        return acronimo;
        
      }

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

    document.getElementById("btnBuscar").addEventListener('click',function(e){
		e.preventDefault();
    
        divJobs.innerHTML='<h1 style="text-align: center;">Developer Jobs</h2>';
        let texto2 = document.getElementById("txtSearch");
        

let selectPaises = document.getElementById("selectPaises");

if(texto2.value!="" && selectPaises.value!='Select a country'){
console.log(paisesFind(selectPaises.value));
    
            fetch('https://jsearch.p.rapidapi.com/search?query='+convertirTexto(texto2.value)+'%2C%20'+paisesFind(selectPaises.value)+'&num_pages=1', options2)
            .then(response => response.json())
            .then(response => {console.log(response)
        
                /*codigo para obtener las  Calificaciones o habilidades*/ 
      
                for (var i = 0; i < response['data'].length; i++) {
                    let Qualifications =[];  
                    if( Object.entries(response['data'][i].job_highlights).length==0){
                        Qualifications.push('There are not anyqualifications')
                    }else{

                        for (let e = 0; e < response['data'][i].job_highlights.Qualifications.length; e++) {
        
                            Qualifications.push (response['data'][i].job_highlights.Qualifications[e]);
                            
                            
                            }
                    }
                  
        
                         /*END of codigo para obtener las  Calificaciones o habilidades*/ 
        
             /*codigo para obtener la  Experiencia requerida por el empleador*/ 
        
        let experience ='';
                    if(response['data'][i].job_required_experience.no_experience_required==true){
        experience='This position no required anyexperience'
                    }else if (response['data'][i].job_required_experience.no_experience_required==false){
                     
                        if(response['data'][i].job_required_experience.required_experience_in_months!=null &&
                        response['data'][i].job_required_experience.required_experience_in_months!='')
                        {
                        experience='This position required '+
                        response['data'][i].job_required_experience.required_experience_in_months+' months of experiences'
                    }else {
                        experience="This position doesn't specify any labor experience, but is a required"
                    }
                       
                    }
            /*END OF codigo para obtener la  Experiencia requerida por el empleador*/ 
        
                /*codigo para obtener el tipo de empleo*/ 
                    let remoto ='';
                    if(response['data'][i].job_is_remote==true){
        
                        remoto='This job is available to work from a remote way'
        
                    }else if(response['data'][i].job_is_remote==false){
                        remoto='This job is not available to work from a remote way'
                    }
          /*End of codigo para obtener el tipo de empleo*/ 
          let fecha =  obtenerFechaFinal(response['data'][i].job_posted_at_datetime_utc)

                divJobs.innerHTML+='<h3 style="text-align: center;">'+response['data'][i].job_title+'</h3>'+
                '<p>Posted date: '+fecha+'</p>'+   
                   '<div style="text-align: center;"><img class="imgLogo" src="'+response['data'][i].employer_logo+'" alt="logo">'+
                   '<p>Employer Name: '+response['data'][i].employer_name+'</p></div>'+ 
                   '<p>Job publisher: '+response['data'][i].job_publisher+'</p>';
                   divJobs.innerHTML+='<h3>Qualifications</h3>.'
         
         for(value in Qualifications){
             divJobs.innerHTML+='<p>'+(parseInt(value)+1)+'. '+Qualifications[value]+'</p>'
        }
        divJobs.innerHTML+='<p>Experience: '+experience+'</p>'+
        '<p>Country: '+response['data'][i].job_country+'</p>'+
        '<p>Remote work: '+remoto+'</p>'+
        '<p>URL to apply: <a target="_blank" href="'+response['data'][i].job_apply_link+
        '">Click here to apply</a></p><hr>';
    }
            })
            .catch(err => console.error(err));
   




        }else if(texto2.value=="" && selectPaises.value=='Select a country'){
    alert("Please insert a Job for searching it and please select a country");
  } else if(texto2.value=="" && selectPaises.value!='Select a country'){
    alert("Please insert a Job for searching it");
  }else if(texto2.value!="" && selectPaises.value=='Select a country'){
    alert("Please select a country");
  } 

    
    
    
    
    
    
    
    });