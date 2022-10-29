var tabla = document.getElementById ('tablaUsuario');
var tabla2 = document.getElementById ('tabla2');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab3a0ceb1msh6a9c1937f6fa475p150d73jsnafb7fa0e2e9d',
		'X-RapidAPI-Host': 'github-non-official-apis.p.rapidapi.com'
	}
};

fetch('https://github-non-official-apis.p.rapidapi.com/fetch?url=https%3A%2F%2Fgithub.com%2FEmarroquin1', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    
    tabla.innerHTML+='<tbody>'+ 
    '<tr>'+
     '<td>'+response.userName+'</td>'+
     '<td><img id="avatar" src="'+response.avatar+'" alt="avatar"></td>'+
     '<td>'+response.totalRepositories+'</td>'+
    '</tr>';
    
    for (let i = 0; i < response.repos.length; i++) {

        tabla2.innerHTML+='<tbody>'+ 
        '<tr>'+
         '<td>'+response.repos[i].repoName+'</td>'+
         '<td>'+response.repos[i].desc+'</td>'+
         '<td>'+response.repos[i].programmingLanguage+'</td>'+
         '<td><a href="'+response.repos[i].url+'">Link</a></td>'+ 
        '</tr>';

     
    }
    
    
    
    
    })
	.catch(err => console.error(err));


    document.getElementById("btnBuscar").addEventListener('click',function(e){
		e.preventDefault();
    
  let texto2 = document.getElementById("txtuserGit");

  if(texto2.value!=""){

    tabla2.innerHTML="";
    tabla.innerHTML="";

    fetch('https://github-non-official-apis.p.rapidapi.com/fetch?url=https%3A%2F%2Fgithub.com%2F'+texto2.value, options)
	.then(response => response.json())
	.then(response => {console.log(response)
    

    tabla.innerHTML+='<tbody>'+ 
    '<tr>'+
     '<td>'+response.userName+'</td>'+
     '<td><img id="avatar" src="'+response.avatar+'" alt="avatar"></td>'+
     '<td>'+response.totalRepositories+'</td>'+
    '</tr>';
    
    for (let i = 0; i < response.repos.length; i++) {

        tabla2.innerHTML+='<tbody>'+ 
        '<tr>'+
         '<td>'+response.repos[i].repoName+'</td>'+
         '<td>'+response.repos[i].desc+'</td>'+
         '<td>'+response.repos[i].programmingLanguage+'</td>'+
         '<td><a href="'+response.repos[i].url+'">Link</a></td>'+ 
        '</tr>';

     
    }
    
    
    
    
    })
	.catch(err => {console.error(err)
    
        tabla.innerHTML='<thead>'+
        '<tr>'+
         '<th>'+
           'User'+
          '</th>'+
           '<th>'+
            'Avatar'+
            '</th>'+
        '<th>'+
        'totalRepositories'+           
            '</th>'+
        '</tr>'+
    '</thead>';
        tabla2.innerHTML='<thead>'+
        '<tr  class="table-dark" style="text-align: center;">'+
            '<th colspan="12">'+
                'REPOSITORIES'+
            '</th>'+
        '</tr>'+
        '<tr>'+
            '<th>'+
                'repository name'+            
            '</th>'+
            '<th>'+
                'Description'+
            '</th>'+
        '<th>'+
            'Programing Language'+
        '</th>'+
'<th>'+
    'URL'+
'</th>'+
        '</tr>'+       
    '</thead>';

    alert('Usuario no encontrado')});




  }else{
    alert("Porfavor insertar el usuario que desea buscar");
  }



    
    })