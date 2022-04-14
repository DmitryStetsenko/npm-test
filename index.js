const doc = document;
axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log('end request')
    });