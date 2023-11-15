req1 = new Promise(function (resolve, reject) {
  resolve("Success!");
});

req2 = new Promise(function (resolve, reject) {
  reject("Failed.");
});

req1.then(function (result) {
  console.log(result);
});
// .then if promise return resolve

req2.catch(function (result) {
  console.log(result);
});
// .catch if promise return reject

req3 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("Success after 3s!"), 3000);
});

req4 = new Promise(function (resolve, reject) {
  setTimeout(() => reject("Failed after 4s."), 4000);
});

Promise.all([req3, req4])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
// resolve if all promises resolve

Promise.race([req3, req4])
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });
// resolve if one promise resolve
