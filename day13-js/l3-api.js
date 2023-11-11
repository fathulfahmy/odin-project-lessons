fetch('https://www.boredapi.com/api/activity', { mode: 'cors' })
	// second argument is an object with  key | value, mode | cors
	.then(function (response) {
		console.log(response);
		// promise is resolved, the result is Response from server
	});

fetch('https://www.boredapi.com/api/activity', { mode: 'cors' })
	.then(function (response) {
		console.log(response.json());
	// .json() read Response and return promise, that is resolved, the result is parsed body text in JSON
	});

fetch('https://www.boredapi.com/api/activity', { mode: 'cors' })
	.then(function (response) {
		return response.json();
	}).then(function(result){
    console.log(result);
    // take result of the resolved promise
  });

fetch('https://www.boredapi.com/api/activity', { mode: 'cors' })
	.then(function (response) {
		return response.json();
	}).then(function(result){
    console.log(result.activity);
    // access object key and return value
  });
