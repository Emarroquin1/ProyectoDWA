
var divNews = document.getElementById('divNews')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab3a0ceb1msh6a9c1937f6fa475p150d73jsnafb7fa0e2e9d',
		'X-RapidAPI-Host': 'newscatcher.p.rapidapi.com'
	}
};

fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=freelancer&lang=en&sort_by=relevancy&page=1&media=True', options)
	.then(response => response.json())
	.then(response => {console.log(response)
	
		
		/*Funcion para limitar caracteres*/

for (let i = 0; i < response['articles'].length; i++) {

		function ellipsis_box(elemento, max_chars){
			limite_text = $(elemento).text();
			
			if (limite_text.length > max_chars)
			{
			limite = limite_text.substr(0, max_chars)+"";
			$(elemento).text(limite);
			}
			}
			$(function()
			{
			ellipsis_box(".limitado", 1200);
			});

		divNews.innerHTML+='<h3>Autor: '+response['articles'][i].author+'</h3> <img class="imgNews" src="'+response['articles'][i].media+'"><p>Fecha de publicación: '+response['articles'][i].published_date+'</p>'+
		'<p class="limitado pNews">'+response['articles'][i].summary+'</p> <a class="aNews" target="_blank" href="'+response['articles'][i].link+'">Leer más...</a><hr>';


	
	
	}})
	.catch(err => console.error(err));
	var num=2;
	document.getElementById("btnRefresh").addEventListener('click',function(e){
		e.preventDefault();
	

		fetch('https://newscatcher.p.rapidapi.com/v1/search_enterprise?q=freelancer&lang=en&sort_by=relevancy&page='+num+'&media=True', options)
		.then(response => response.json())
		.then(response => {console.log(response)
			
		function ellipsis_box(elemento, max_chars){
			limite_text = $(elemento).text();
			
			if (limite_text.length > max_chars)
			{
			limite = limite_text.substr(0, max_chars)+"";
			$(elemento).text(limite);
			}
			}
			$(function()
			{
			ellipsis_box(".limitado", 1200);
			});

			for (let i = 0; i < response['articles'].length; i++) {

				function ellipsis_box(elemento, max_chars){
					limite_text = $(elemento).text();
					
					if (limite_text.length > max_chars)
					{
					limite = limite_text.substr(0, max_chars)+"";
					$(elemento).text(limite);
					}
					}
					$(function()
					{
					ellipsis_box(".limitado", 1200);
					});
		
					if(i==0){
						divNews.innerHTML='<h3>Autor: '+response['articles'][i].author+'</h3> <img class="imgNews" src="'+response['articles'][i].media+'"><p>Fecha de publicación: '+response['articles'][i].published_date+'</p>'+
				'<p class="limitado pNews">'+response['articles'][i].summary+'</p> <a class="aNews" target="_blank" href="'+response['articles'][i].link+'">Leer más...</a><hr>';
		
		
					}else{
				divNews.innerHTML+='<h3>Autor: '+response['articles'][i].author+'</h3> <img class="imgNews" src="'+response['articles'][i].media+'"><p>Fecha de publicación: '+response['articles'][i].published_date+'</p>'+
				'<p class="limitado pNews">'+response['articles'][i].summary+'</p> <a class="aNews" target="_blank" href="'+response['articles'][i].link+'">Leer más...</a><hr>';
					}
		
			
			
			}

	})


	num++;
})