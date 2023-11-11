async function getActivity() {
	try {
		// comment block below to get activity
		await new Promise(function (resolve, reject) {
			reject('You are rejected!');
		});
		// comment block above to get activity

		const response = await fetch('https://www.boredapi.com/api/activity', {
			mode: 'cors',
		});
		const result = await response.json();
		const activity = result.activity;
		console.log(activity);
	} catch (error) {
		console.log('Error: ' + error);
	}
}
getActivity();
