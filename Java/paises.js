
const options = {
	method: 'GET',
	headers: {
     "Accept": "application/json",
    "api-token": "bprdyF4mjrNnXU3_gKA7Gb_-ojXpb2I2Dxf6bYfkVQdVn4Igr78eQ4VFeUgb0ghqlWA",
    "user-email": "erickmarroquin503@hotmail.com"
	}
};

fetch('https://www.universal-tutorial.com/api/getaccesstoken', options)
	.then(response => response.json())
	.then(response => console.log(response))