user = {
	name: 'John',
	birthDate: '2001-10-07',
	age: function () {
		currDate - birthDate;
	},
};

user.age = user.age.toString();
const myJson = JSON.stringify(user);

const myObj = JSON.parse(myJson, function (value, key) {
	// second parameter is a reviver function to parse value
	if (key === 'birth') {
		return new Date(value);
	} else {
		return value;
	}
});

myObj.age = eval('(' + myObj.age + ')');
// function string is parsed through eval
