const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1ab3a0ceb1msh6a9c1937f6fa475p150d73jsnafb7fa0e2e9d',
		'X-RapidAPI-Host': 'community-hacker-news-v1.p.rapidapi.com'
	}
};

fetch('https://community-hacker-news-v1.p.rapidapi.com/updates.json?print=pretty', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));