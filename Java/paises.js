
const options = {
	method: 'GET',
	
};
var paises=[];
fetch('https://restcountries.com/v3.1/all', options)
	.then(response2 => response2.json())
	.then(response2 => {console.log(response2)
	
		for (let i = 0; i < response2.length; i++) {
           let objPaises={nombre:'',acronimo:''}
		


		   for (let e = 0; e < response2[i].altSpellings.length; e++) {
          
			

				if(e==1){

					objPaises.nombre=response2[i].altSpellings[e];

				}else if (e==0){

					objPaises.acronimo=response2[i].altSpellings[e];

				}
				
			
			
		
			
		}
		if(objPaises.nombre!=''){
			paises.push(objPaises);
		}

		}
	
		paises.sort();
		var selectPaises = document.getElementById('selectPaises');
		for (value in paises) {
			var option = document.createElement("option");
			option.text = paises[value].nombre;
			selectPaises.add(option);
		   }

	})