var divJobs = document.getElementById('divJobs');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab3a0ceb1msh6a9c1937f6fa475p150d73jsnafb7fa0e2e9d',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1', options)
	.then(response => response.json())
	.then(response => {console.log(response)

        /*codigo para obtener las  Calificaciones o habilidades*/ 
    let Qualifications ='';
        for (let i = 0; i < response['data'].length; i++) {

            for (let e = 0; e < response['data'][e].job_highlights.Qualifications.length; i++) {

            Qualifications+= response['data'][e].job_highlights.Qualifications;
            
            
            }

                 /*END of codigo para obtener las  Calificaciones o habilidades*/ 

     /*codigo para obtener la  Experiencia requerida por el empleador*/ 

let experience ='';
            if(response['data'][i].job_required_experience.no_experience_required==true){
experience='This position no required anyexperience'
            }else if (response['data'][i].job_required_experience.no_experience_required==false){
                experience='This position required '+
                response['data'][i].job_required_experience.required_experience_in_months+' months of experiences'
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

        divJobs.innerHTML='<h3 style="text-align: center;">'+response['data'][i].job_title+'</h3>'+
        '<p>Posted date: '+response['data'][i].job_posted_at_datetime_utc+'</p>'+   
           '<div style="text-align: center;"><img class="imgLogo" src="'+response['data'][i].employer_logo+'" alt="logo">'+
           '<p>Employer Name: '+response['data'][i].employer_name+'</p></div>'+ 
           '<p>Job publisher: '+response['data'][i].job_publisher+'</p>'+
         '<p>Job description: '+response['data'][i].job_description+'</p>'+
         '<p>Qualifications.'+Qualifications+'</p>'+
         '<p>Experience: '+experience+'</p>'+
         '<p>Country: '+response['data'][i].job_country+'</p>'+
         '<p>Remote work: '+remoto+'</p>'
         '<p>URL to apply: '+response['data'][i].job_apply_link+'</p>';
        }
    
    })
	.catch(err => console.error(err));

    






    document.getElementById("btnBuscar").addEventListener('click',function(e){
		e.preventDefault();
    
        divJobs.innerHTML='';
        let texto2 = document.getElementById("txtuserGit");

        if(texto2.value!=""){


            fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&num_pages=1', options)
            .then(response => response.json())
            .then(response => {console.log(response)
        
                /*codigo para obtener las  Calificaciones o habilidades*/ 
            let Qualifications ='';
                for (let i = 0; i < response['data'].length; i++) {
        
                    for (let e = 0; e < response['data'][e].job_highlights.Qualifications.length; i++) {
        
                    Qualifications+= response['data'][e].job_highlights.Qualifications;
                    
                    
                    }
        
                         /*END of codigo para obtener las  Calificaciones o habilidades*/ 
        
             /*codigo para obtener la  Experiencia requerida por el empleador*/ 
        
        let experience ='';
                    if(response['data'][i].job_required_experience.no_experience_required==true){
        experience='This position no required anyexperience'
                    }else if (response['data'][i].job_required_experience.no_experience_required==false){
                        experience='This position required '+
                        response['data'][i].job_required_experience.required_experience_in_months+' months of experiences'
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
        
                divJobs.innerHTML='<h3 style="text-align: center;">'+response['data'][i].job_title+'</h3>'+
                '<p>Posted date: '+response['data'][i].job_posted_at_datetime_utc+'</p>'+   
                   '<div style="text-align: center;"><img class="imgLogo" src="'+response['data'][i].employer_logo+'" alt="logo">'+
                   '<p>Employer Name: '+response['data'][i].employer_name+'</p></div>'+ 
                   '<p>Job publisher: '+response['data'][i].job_publisher+'</p>'+
                 '<p>Job description: '+response['data'][i].job_description+'</p>'+
                 '<p>Qualifications.'+Qualifications+'</p>'+
                 '<p>Experience: '+experience+'</p>'+
                 '<p>Country: '+response['data'][i].job_country+'</p>'+
                 '<p>Remote work: '+remoto+'</p>'
                 '<p>URL to apply: '+response['data'][i].job_apply_link+'</p>';
                }
            
            })
            .catch(err => console.error(err));





        }else{
    alert("Please insert a Job for searching it");
  }

    
    
    
    
    
    
    
    });